# from fastapi import FastAPI
# version = "v1"
# description = """
# X-TOP AI - bu savdo do'konlaridagi "muzlab qolgan" 
# (sotilmay) tovarlarni sun'iy intellekt yordamida 
# aniqlaydigan va ularni turgan tez aylanma mablag'ga aylantirib, 
# aqlli savdo ekotizimi. Sodda qilib: Tadbirkor uchun - aqlli tahlilchi, 
# xaridor uchun - eng manfaatli chegirmalar markazi.
# """
# app = FastAPI(
#     title="X-TOP AI",
#     description=description,
#     version=version,
# )



import os
from datetime import datetime, timedelta
from typing import Optional

from authlib.integrations.starlette_client import OAuth
from dotenv import load_dotenv
from fastapi import FastAPI, Request, Depends, HTTPException, Cookie
from fastapi.responses import HTMLResponse, RedirectResponse
from jose import JWTError, jwt
from sqlalchemy import Column, Integer, String, select
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from starlette.middleware.sessions import SessionMiddleware

load_dotenv()

# Config
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
# DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://postgres:password@localhost/oauth_db")
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./test.db")
SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")
ALGORITHM = "HS256"
SESSION_SECRET = "session-secret"

oauth = OAuth()
oauth.register(
    name="google",
    client_id=GOOGLE_CLIENT_ID,
    client_secret=GOOGLE_CLIENT_SECRET,
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid email profile"},
)



engine = create_async_engine(
    DATABASE_URL,
    connect_args={"check_same_thread": False} if "sqlite" in DATABASE_URL else {}
)


AsyncSessionLocal = async_sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)
Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    google_id = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    name = Column(String)
    picture = Column(String)

async def create_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

app = FastAPI()
app.add_middleware(SessionMiddleware, secret_key=SESSION_SECRET)

@app.on_event("startup")
async def startup():
    await create_tables()

def create_access_token(data: dict, expires_delta: timedelta = timedelta(hours=24)):
    to_encode = data.copy()
    expire = datetime.utcnow() + expires_delta
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

async def get_db():
    async with AsyncSessionLocal() as session:
        yield session

async def get_current_user(access_token: Optional[str] = Cookie(None), db: AsyncSession = Depends(get_db)):
    if not access_token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(access_token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub") # type: ignore
        if not email:
            raise HTTPException(status_code=401)
    except JWTError:
        raise HTTPException(status_code=401)
    result = await db.execute(select(User).where(User.email == email))
    user = result.scalars().first()
    if not user:
        raise HTTPException(status_code=401)
    return user

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return """
    <h1>FastAPI Google OAuth</h1>
    <a href="/login/google">Login with Google</a><br><br>
    <a href="/me">Profile (protected)</a><br><br>
    <a href="/logout">Logout</a>
    """

@app.get("/login/google")
async def login_google(request: Request):
    redirect_uri = request.url_for("auth_google")
    return await oauth.google.authorize_redirect(request, redirect_uri) # type: ignore

@app.get("/auth/google")
async def auth_google(request: Request, db: AsyncSession = Depends(get_db)):
    token = await oauth.google.authorize_access_token(request) # type: ignore
    user_info = token.get("userinfo")
    if not user_info:
        raise HTTPException(400, "Failed to get user info")

    google_id = user_info["sub"]
    email = user_info["email"]
    name = user_info.get("name")
    picture = user_info.get("picture")

    result = await db.execute(select(User).where(User.google_id == google_id))
    user = result.scalars().first()
    if not user:
        result = await db.execute(select(User).where(User.email == email))
        user = result.scalars().first()
        if not user:
            user = User(google_id=google_id, email=email, name=name, picture=picture)
            db.add(user)
            await db.commit()
            await db.refresh(user)
        else:
            user.google_id = google_id
            user.name = name
            user.picture = picture
            await db.commit()

    access_token = create_access_token({"sub": email})
    response = RedirectResponse(url="/")
    response.set_cookie("access_token", access_token, httponly=True, max_age=86400, samesite="lax")
    return response

@app.get("/me")
async def me(current_user: User = Depends(get_current_user)):
    return {"email": current_user.email, "name": current_user.name, "picture": current_user.picture}

@app.get("/logout")
async def logout():
    response = RedirectResponse(url="/")
    response.delete_cookie("access_token")
    return response
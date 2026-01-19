from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from config import settings



oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")  # we won't really use it

def create_access_token(data: dict):
    return jwt.encode(data, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
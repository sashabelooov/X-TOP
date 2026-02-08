from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "X-TOP API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    DATABASE_URL: str = "sqlite+aiosqlite:///./xtop.db"

    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()

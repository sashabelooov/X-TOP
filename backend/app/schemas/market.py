from pydantic import BaseModel
from datetime import datetime


class MarketCreate(BaseModel):
    name: str
    description: str | None = None
    logo_url: str | None = None
    address: str | None = None
    phone: str | None = None
    is_active: bool = True


class MarketResponse(BaseModel):
    id: int
    name: str
    description: str | None = None
    logo_url: str | None = None
    address: str | None = None
    phone: str | None = None
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

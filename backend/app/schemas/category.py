from pydantic import BaseModel
from datetime import datetime


class CategoryCreate(BaseModel):
    name: str
    slug: str
    description: str | None = None
    image_url: str | None = None
    parent_id: int | None = None
    is_active: bool = True


class CategoryUpdate(BaseModel):
    name: str | None = None
    slug: str | None = None
    description: str | None = None
    image_url: str | None = None
    parent_id: int | None = None
    is_active: bool | None = None


class CategoryResponse(BaseModel):
    id: int
    name: str
    slug: str
    description: str | None = None
    image_url: str | None = None
    parent_id: int | None = None
    is_active: bool
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True

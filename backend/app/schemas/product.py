from pydantic import BaseModel, Field
from datetime import datetime
from decimal import Decimal


class ProductImageResponse(BaseModel):
    id: int
    image_url: str
    is_primary: bool
    sort_order: int

    class Config:
        from_attributes = True


class ProductCreate(BaseModel):
    name: str
    slug: str
    description: str | None = None
    price: Decimal = Field(gt=0)
    original_price: Decimal | None = None
    discount_percent: int | None = Field(None, ge=0, le=100)
    stock_quantity: int = Field(default=0, ge=0)
    category_id: int
    market_id: int
    is_active: bool = True


class ProductUpdate(BaseModel):
    name: str | None = None
    slug: str | None = None
    description: str | None = None
    price: Decimal | None = Field(None, gt=0)
    original_price: Decimal | None = None
    discount_percent: int | None = Field(None, ge=0, le=100)
    stock_quantity: int | None = Field(None, ge=0)
    category_id: int | None = None
    market_id: int | None = None
    is_active: bool | None = None


class ProductResponse(BaseModel):
    id: int
    name: str
    slug: str
    description: str | None
    price: Decimal
    original_price: Decimal | None
    discount_percent: int | None
    stock_quantity: int
    is_active: bool
    view_count: int
    favorite_count: int
    category_id: int
    market_id: int
    created_at: datetime
    updated_at: datetime
    images: list[ProductImageResponse] = []

    class Config:
        from_attributes = True


class ExternalLinkClickCreate(BaseModel):
    platform_name: str
    external_url: str

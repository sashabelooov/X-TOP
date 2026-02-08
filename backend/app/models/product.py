from decimal import Decimal
from sqlalchemy import String, Text, Boolean, Integer, ForeignKey, Numeric
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base
from app.models.base import TimestampMixin


class Product(TimestampMixin, Base):
    __tablename__ = "products"

    name: Mapped[str] = mapped_column(String(255), nullable=False)
    slug: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    price: Mapped[Decimal] = mapped_column(Numeric(12, 2), nullable=False)
    original_price: Mapped[Decimal | None] = mapped_column(Numeric(12, 2), nullable=True)
    discount_percent: Mapped[int | None] = mapped_column(Integer, nullable=True)
    stock_quantity: Mapped[int] = mapped_column(Integer, default=0)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    view_count: Mapped[int] = mapped_column(Integer, default=0)
    favorite_count: Mapped[int] = mapped_column(Integer, default=0)

    # Foreign keys
    category_id: Mapped[int] = mapped_column(Integer, ForeignKey("categories.id"), nullable=False)
    market_id: Mapped[int] = mapped_column(Integer, ForeignKey("markets.id"), nullable=False)

    # Relationships
    category = relationship("Category", back_populates="products")
    market = relationship("Market", back_populates="products")
    images = relationship("ProductImage", back_populates="product", cascade="all, delete-orphan")
    views = relationship("ProductView", back_populates="product", cascade="all, delete-orphan")
    favorites = relationship("ProductFavorite", back_populates="product", cascade="all, delete-orphan")
    external_clicks = relationship("ExternalLinkClick", back_populates="product", cascade="all, delete-orphan")


class ProductImage(TimestampMixin, Base):
    __tablename__ = "product_images"

    product_id: Mapped[int] = mapped_column(Integer, ForeignKey("products.id"), nullable=False)
    image_url: Mapped[str] = mapped_column(String(500), nullable=False)
    is_primary: Mapped[bool] = mapped_column(Boolean, default=False)
    sort_order: Mapped[int] = mapped_column(Integer, default=0)

    product = relationship("Product", back_populates="images")


class ProductView(TimestampMixin, Base):
    __tablename__ = "product_views"

    product_id: Mapped[int] = mapped_column(Integer, ForeignKey("products.id"), nullable=False)
    ip_address: Mapped[str | None] = mapped_column(String(45), nullable=True)
    user_agent: Mapped[str | None] = mapped_column(String(500), nullable=True)

    product = relationship("Product", back_populates="views")


class ProductFavorite(TimestampMixin, Base):
    __tablename__ = "product_favorites"

    product_id: Mapped[int] = mapped_column(Integer, ForeignKey("products.id"), nullable=False)
    session_id: Mapped[str] = mapped_column(String(255), nullable=False)

    product = relationship("Product", back_populates="favorites")


class ExternalLinkClick(TimestampMixin, Base):
    __tablename__ = "external_link_clicks"

    product_id: Mapped[int] = mapped_column(Integer, ForeignKey("products.id"), nullable=False)
    platform_name: Mapped[str] = mapped_column(String(100), nullable=False)
    external_url: Mapped[str] = mapped_column(String(500), nullable=False)
    ip_address: Mapped[str | None] = mapped_column(String(45), nullable=True)

    product = relationship("Product", back_populates="external_clicks")

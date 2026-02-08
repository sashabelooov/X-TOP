from sqladmin import ModelView # type: ignore
from app.models.market import Market
from app.models.category import Category
from app.models.product import Product


class MarketAdmin(ModelView, model=Market):
    """Admin view for Market model"""

    column_list = [Market.id, Market.name, Market.address, Market.phone, Market.is_active, Market.created_at]
    column_searchable_list = [Market.name, Market.address]
    column_default_sort = [(Market.created_at, True)]
    form_excluded_columns = ["id", "created_at", "updated_at", "products"]
    icon = "fa-solid fa-store"


class CategoryAdmin(ModelView, model=Category):
    """Admin view for Category model"""

    column_list = [Category.id, Category.name, Category.slug, Category.parent_id, Category.is_active, Category.created_at]
    column_searchable_list = [Category.name, Category.slug]
    column_default_sort = [(Category.created_at, True)]
    form_excluded_columns = ["id", "created_at", "updated_at", "products", "children"]
    icon = "fa-solid fa-folder"
    
    # Show parent category as dropdown
    form_ajax_refs = {
        "parent": {
            "fields": ("name",),
            "order_by": "name",
        }
    }


class ProductAdmin(ModelView, model=Product):
    """Admin view for Product model"""

    column_list = [Product.id, Product.name, Product.slug, Product.price, Product.category_id, Product.market_id, Product.is_active]
    column_searchable_list = [Product.name, Product.slug]
    column_default_sort = [(Product.created_at, True)]
    form_excluded_columns = ["id", "created_at", "updated_at", "view_count", "favorite_count", "images", "views", "favorites", "external_clicks"]
    icon = "fa-solid fa-box"
    
    # Show market and category as dropdowns with search
    form_ajax_refs = {
        "market": {
            "fields": ("name",),
            "order_by": "name",
        },
        "category": {
            "fields": ("name",),
            "order_by": "name",
        }
    }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqladmin import Admin # type: ignore

from app.core.config import settings
from app.core.database import engine
from app.api.v1.endpoints import health, market, category, product
from app.admin import MarketAdmin, CategoryAdmin, ProductAdmin


def create_app() -> FastAPI:
    app = FastAPI(
        title=settings.APP_NAME,
        version=settings.APP_VERSION,
        debug=settings.DEBUG,
    )

    # CORS
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # SQLAdmin
    admin = Admin(app, engine)
    admin.add_view(MarketAdmin)
    admin.add_view(CategoryAdmin)
    admin.add_view(ProductAdmin)


    # Register routers
    app.include_router(health.router, prefix="/api/v1", tags=["Health"])
    app.include_router(market.router, prefix="/api/v1", tags=["Markets"])
    app.include_router(category.router, prefix="/api/v1", tags=["Categories"])
    app.include_router(product.router, prefix="/api/v1", tags=["Products"])



    return app


app = create_app()

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload


from app.core.database import get_db
from app.models.product import Product, ProductView, ProductFavorite, ExternalLinkClick
from app.schemas.product import ProductCreate, ProductUpdate, ProductResponse, ExternalLinkClickCreate



router = APIRouter()




@router.post("/products", response_model=ProductResponse)
async def create_product(product_data: ProductCreate, db: AsyncSession = Depends(get_db)):
    # Check slug uniqueness
    result = await db.execute(select(Product).where(Product.slug == product_data.slug))
    if result.scalar_one_or_none():
        raise HTTPException(status_code=400, detail="Product with this slug already exists")
    
    product = Product(**product_data.model_dump())
    db.add(product)
    await db.commit()
    await db.refresh(product, ["images"])  # Refresh with images
    return product



@router.get("/products", response_model=list[ProductResponse])
async def get_products(
    category_id: int | None = None,
    market_id: int | None = None,
    db: AsyncSession = Depends(get_db)
):
    query = select(Product).options(selectinload(Product.images))  # Add this
    
    if category_id:
        query = query.where(Product.category_id == category_id)
    if market_id:
        query = query.where(Product.market_id == market_id)
    
    result = await db.execute(query)
    products = result.scalars().all()
    return products



@router.get("/products/{product_id}", response_model=ProductResponse)
async def get_product(product_id: int, request: Request, db: AsyncSession = Depends(get_db)):
    result = await db.execute(
        select(Product)
        .options(selectinload(Product.images))  # Add this
        .where(Product.id == product_id)
    )
    product = result.scalar_one_or_none()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Track view
    view = ProductView(
        product_id=product.id,
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent")
    )
    db.add(view)
    
    # Increment view count
    product.view_count += 1
    
    await db.commit()
    await db.refresh(product, ["images"])  # Refresh with images
    return product



@router.put("/products/{product_id}", response_model=ProductResponse)
async def update_product(
    product_id: int,
    product_data: ProductUpdate,
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(
        select(Product)
        .options(selectinload(Product.images))  # Add this
        .where(Product.id == product_id)
    )
    product = result.scalar_one_or_none()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    for key, value in product_data.model_dump(exclude_unset=True).items():
        setattr(product, key, value)
    
    await db.commit()
    await db.refresh(product, ["images"])  # Refresh with images
    return product



@router.delete("/products/{product_id}")
async def delete_product(product_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Product).where(Product.id == product_id))
    product = result.scalar_one_or_none()
    
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    await db.delete(product)
    await db.commit()
    return {"message": "Product deleted successfully"}


@router.post("/products/{product_id}/favorite")
async def toggle_favorite(product_id: int, session_id: str, db: AsyncSession = Depends(get_db)):
    # Check if product exists
    result = await db.execute(select(Product).where(Product.id == product_id))
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Check if already favorited
    fav_result = await db.execute(
        select(ProductFavorite).where(
            ProductFavorite.product_id == product_id,
            ProductFavorite.session_id == session_id
        )
    )
    existing_fav = fav_result.scalar_one_or_none()
    
    if existing_fav:
        # Remove favorite
        await db.delete(existing_fav)
        product.favorite_count -= 1
        message = "Removed from favorites"
    else:
        # Add favorite
        favorite = ProductFavorite(product_id=product_id, session_id=session_id)
        db.add(favorite)
        product.favorite_count += 1
        message = "Added to favorites"
    
    await db.commit()
    return {"message": message, "favorite_count": product.favorite_count}


@router.post("/products/{product_id}/external-click")
async def track_external_click(
    product_id: int,
    click_data: ExternalLinkClickCreate,
    request: Request,
    db: AsyncSession = Depends(get_db)
):
    # Check if product exists
    result = await db.execute(select(Product).where(Product.id == product_id))
    product = result.scalar_one_or_none()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    
    # Track click
    click = ExternalLinkClick(
        product_id=product_id,
        platform_name=click_data.platform_name,
        external_url=click_data.external_url,
        ip_address=request.client.host if request.client else None
    )
    db.add(click)
    await db.commit()
    
    return {"message": "Click tracked successfully"}

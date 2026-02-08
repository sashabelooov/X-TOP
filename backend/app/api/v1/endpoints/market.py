from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from app.core.database import get_db
from app.models.market import Market
from app.schemas.market import MarketCreate, MarketResponse

router = APIRouter()


@router.post("/markets", response_model=MarketResponse)
async def create_market(market_data: MarketCreate, db: AsyncSession = Depends(get_db)):
    market = Market(**market_data.model_dump())
    db.add(market)
    await db.commit()
    await db.refresh(market)
    return market


@router.get("/markets", response_model=list[MarketResponse])
async def get_markets(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Market))
    markets = result.scalars().all()
    return markets


@router.get("/markets/{market_id}", response_model=MarketResponse)
async def get_market(market_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Market).where(Market.id == market_id))
    market = result.scalar_one_or_none()
    if not market:
        raise HTTPException(status_code=404, detail="Market not found")
    return market



@router.put("/markets/{market_id}", response_model=MarketResponse)
async def update_market(
    market_id: int, 
    market_data: MarketCreate, 
    db: AsyncSession = Depends(get_db)
):
    result = await db.execute(select(Market).where(Market.id == market_id))
    market = result.scalar_one_or_none()
    
    if not market:
        raise HTTPException(status_code=404, detail="Market not found")
    
    for key, value in market_data.model_dump().items():
        setattr(market, key, value)
    
    await db.commit()
    await db.refresh(market)
    return market


@router.delete("/markets/{market_id}")
async def delete_market(market_id: int, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Market).where(Market.id == market_id))
    market = result.scalar_one_or_none()
    
    if not market:
        raise HTTPException(status_code=404, detail="Market not found")
    
    await db.delete(market)
    await db.commit()
    return {"message": "Market deleted successfully"}

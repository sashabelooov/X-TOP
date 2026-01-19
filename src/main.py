from fastapi import FastAPI
from src.auth.router import router as auth_router



version = "v1"
description = """
X-TOP AI - bu savdo do'konlaridagi "muzlab qolgan" 
(sotilmay) tovarlarni sun'iy intellekt yordamida 
aniqlaydigan va ularni turgan tez aylanma mablag'ga aylantirib, 
aqlli savdo ekotizimi. Sodda qilib: Tadbirkor uchun - aqlli tahlilchi, 
xaridor uchun - eng manfaatli chegirmalar markazi.
"""

app = FastAPI(
    title="X-TOP AI",
    description=description,
    version=version,
)


app.include_router(auth_router)

from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "The API is up and running"}



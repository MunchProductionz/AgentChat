from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
from pydantic import BaseModel

### Setup ###

# Create the FastAPI instance
app = FastAPI()

# Define allowed CORS origins
origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "*",                                # This is for development only and should be removed for production
]

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


### BaseModels ###

class UserQuery(BaseModel):
    query: str


### API Endpoints ###

@app.get("/")
async def root():
    return {"message": "The API is up and running"}

@app.post("/")
async def create_item(userQuery: UserQuery):
    return {"userQuery": userQuery, "agentResponse": "Hello world!"}

@app.get("/items/{item_id}")
async def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}

from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from utils.database_utils import get_db
import re
from fastapi.middleware.cors import CORSMiddleware

import schemas.user_schema as user_schema
from utils.database_utils import Base
import services.user_service as user_service
from utils.database_utils import engine

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://127.0.0.1:8000",
    "http://localhost:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

email_regex = "^[a-z0-9]+[\\._]?[a-z0-9]+[@]\\w+[.]\\w{2,3}$"


@app.post("/api/users/", response_model=user_schema.User)
def create_user(user: user_schema.UserCreate, db: Session = Depends(get_db)):
    db_user = user_service.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    if len(user.password) < 8:
        raise HTTPException(
            status_code=400, detail="Password must be at least 8 characters"
        )
    if not re.match(email_regex, user.email):
        raise HTTPException(
            status_code=400, detail="Email must be a valid email address"
        )
    if len(user.first_name) < 3:
        raise HTTPException(
            status_code=400, detail="First name must be at least 2 characters"
        )
    if len(user.last_name) < 3:
        raise HTTPException(
            status_code=400, detail="Last name must be at least 2 characters"
        )
    db_created_user = user_service.create_user(db=db, user=user)
    return user_schema.User.from_orm(db_created_user)


@app.get("/users/{user_id}", response_model=user_schema.User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_service.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=400, detail="User does not exist")
    return user_schema.User.from_orm(db_user)



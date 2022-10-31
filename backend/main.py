import re

from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import Session, sessionmaker

import models.base as base
import models.meal_model
import models.menu_model
import models.order_model
import models.organisation_model
import models.tag_model
import models.user_model
import schemas.user_schema as user_schema
import services.user_service as user_service

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


base.Base.metadata.create_all(bind=engine)

app = FastAPI()


origins = ["http://127.0.0.1:8000", "http://localhost:8000"]

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
    db_created_user = user_service.create_user(db=db, user=user)
    return user_schema.User.from_orm(db_created_user)


@app.get("/api/users/{user_id}", response_model=user_schema.User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_service.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=400, detail="User does not exist")
    return user_schema.User.from_orm(db_user)

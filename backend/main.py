import re

import fastapi
import fastapi.security as security
import models.base as base
import models.meal_model
import models.menu_model
import models.order_model
import models.organisation_model
import models.tag_model
import models.user_model
import schemas.user_schema as user_schema
import services.user_service as user_service
import utils.authentication_utils as authentication_utils
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from utils.database_utils import get_db

app = FastAPI()

origins = ["http://127.0.0.1:8000", "http://localhost:8000", "http://localhost:3000", "http://127.0.0.1:3000"]

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


@app.get("/api/users/me", response_model=user_schema.User)
async def read_user_return_token(
    user: user_schema.User = Depends(authentication_utils.get_current_user),
):
    return user


@app.get("/api/users/{user_id}", response_model=user_schema.User)
async def read_user(user_id: int, db: Session = Depends(get_db)):
    db_user = user_service.get_user(db, user_id=user_id)
    if db_user is None:
        raise HTTPException(status_code=400, detail="User does not exist")
    return user_schema.User.from_orm(db_user)


@app.post("/api/token")
async def generate_token(
    form_data: security.OAuth2PasswordRequestForm = Depends(),
    db: Session = Depends(get_db),
):
    user = await authentication_utils.authenticate_user(
        form_data.username, form_data.password, db
    )
    if not user:
        return fastapi.HTTPException(status_code=401, detail="Invalid credentials")

    return await authentication_utils.create_token(user)


@app.get("/api/users/delete_user/{delete_user_id}")
async def delete_user(
    delete_user_id: int,
    user: user_schema.User = Depends(authentication_utils.get_current_user),
    db: Session = Depends(get_db),
):
    if user.id != delete_user_id:
        raise HTTPException(
            status_code=400, detail="You can only delete your own account"
        )
    user_service.delete_user(db=db, user_id=delete_user_id)
    return {"message": "user has been successfully deleted"}


@app.get("/api/users/update_user_email/{update_user_id}")
async def update_user_email(
    new_email: str,
    update_user_id: int,
    user: user_schema.User = Depends(authentication_utils.get_current_user),
    db: Session = Depends(get_db),
):
    if user.id != update_user_id:
        raise HTTPException(
            status_code=400, detail="You can only update your own account"
        )
    user_service.update_user_email(db=db, user_id=update_user_id, new_email=new_email)
    return {"message": "user has been successfully updated"}

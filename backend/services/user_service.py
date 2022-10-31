import re

import models.user_model as user_model
import passlib.hash as hash
import schemas.user_schema as user_schema
from fastapi import HTTPException
from sqlalchemy.orm import Session

EMAIL_REGEX = "^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$"


def get_user(db: Session, user_id: int) -> user_model.User:
    """
    Get a user by id
    """
    return db.query(user_model.User).filter(user_model.User.id == user_id).scalar()


def get_user_by_email(db: Session, email: str) -> user_model.User:
    """
    Get a user by email
    """
    return db.query(user_model.User).filter(user_model.User.email == email).scalar()


def create_user(db: Session, user: user_schema.UserCreate) -> user_model.User:
    """
    Create a new user
    """
    hashed_password = hash.bcrypt.hash(user.password)
    db_user = user_model.User(
        email=user.email,
        hashed_password=hashed_password,
        organisation_id=user.organisation_id,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def delete_user(db: Session, user_id: int):
    """
    Delete and existing user
    """
    user = db.query(user_model.User).filter(user_model.User.id == user_id).first()
    if not user:
        raise HTTPException(
            status_code=400, detail=f"A user with id: {user_id} doesn't exist"
        )
    db.delete(user)
    db.commit()


def update_user_email(db: Session, user_id: int, new_email: str):
    user = get_user(db=db, user_id=user_id)
    if not user:
        raise HTTPException(status_code=400, detail="user with this id does not exist")
    if not re.match(EMAIL_REGEX, new_email):
        raise HTTPException(status_code=400, detail="incorrect email")
    user_with_identical_email = get_user_by_email(db=db, email=new_email)
    if user_with_identical_email is not None:
        raise HTTPException(
            status_code=400, detail="user with this email already exists"
        )
    user.email = new_email
    db.commit()

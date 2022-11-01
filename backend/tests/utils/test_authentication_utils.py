import jwt
import pytest
import services.user_service as user_service
from fastapi import HTTPException
from schemas import user_schema

import utils.authentication_utils as authentication_utils
from utils.authentication_utils import JWT_SECRET
from utils.database_utils import SessionLocal
from utils.testing_utils import create_user


@pytest.mark.asyncio
async def test_get_current_user_with_incorrect_token():
    db = SessionLocal()
    fake_token = "totally unauthentic token that should not work"
    with pytest.raises(HTTPException):
        _ = await authentication_utils.get_current_user(db, fake_token)


@pytest.mark.asyncio
async def test_get_current_user_with_correct_token():
    db = SessionLocal()
    user_created = create_user()
    user_db_model = user_service.get_user(db=db, user_id=user_created.id)
    user_obj = user_schema.User.from_orm(user_db_model)
    token = jwt.encode(user_obj.dict(), JWT_SECRET)
    print(token)
    current_user = await authentication_utils.get_current_user(db=db, token=token)
    db.close()
    assert user_obj.id == current_user.id
    assert user_obj.email == current_user.email


@pytest.mark.asyncio
async def test_authenticate_user_with_correct_data():
    db = SessionLocal()
    user = create_user(password="a_specific_password")
    authenticated_user = await authentication_utils.authenticate_user(
        email=user.email, password="a_specific_password", db=db
    )
    db.close()
    assert authenticated_user.id == user.id  # type: ignore
    assert authenticated_user.email == user.email  # type: ignore


@pytest.mark.asyncio
async def test_authenticate_user_with_incorrect_password():
    db = SessionLocal()
    user = create_user(password="a_specific_password")
    db.close()
    assert (
        await authentication_utils.authenticate_user(
            email=user.email, password="wrong_password", db=db
        )
        == False
    )


@pytest.mark.asyncio
async def test_authenticate_user_ith_incorrect_email():
    db = SessionLocal()
    _ = create_user(password="a_specific_password")
    db.close()
    assert (
        await authentication_utils.authenticate_user(
            email="wrongemail@gmail.com", password="a_specific_password", db=db
        )
        == False
    )


@pytest.mark.asyncio
async def test_create_token():
    TEST_JWT_SECRET = "923994293942949"
    user_created = create_user(password="a_specific_password")
    db = SessionLocal()
    user_db_model = user_service.get_user(db=db, user_id=user_created.id)
    db.close()
    user_obj = user_schema.User.from_orm(user_db_model)
    token = await authentication_utils.create_token(
        user_db_model, secret=TEST_JWT_SECRET
    )
    assert token["access_token"] == jwt.encode(user_obj.dict(), TEST_JWT_SECRET)

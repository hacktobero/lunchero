import uuid

import pytest
import utils.testing_utils as testing_utils
from fastapi import HTTPException
from schemas.user_schema import UserCreate
from utils.database_utils import SessionLocal

from services.user_service import (
    create_user,
    delete_user,
    get_user,
    get_user_by_email,
    update_user_email,
)


def test_get_user():
    user = testing_utils.create_user()
    db = SessionLocal()
    user_from_db = get_user(db, user.id)
    db.close()
    assert user_from_db.id == user.id
    assert user_from_db.email == user.email


def test_get_user_by_email():
    user = testing_utils.create_user()
    db = SessionLocal()
    user_from_db = get_user_by_email(db, user.email)
    db.close()
    assert user_from_db.id == user.id
    assert user_from_db.email == user.email


def test_create_user():
    user_data = UserCreate(
        email="testemail@gmail.com", password="testpassword", organisation_id=1
    )
    db = SessionLocal()
    user_from_db = create_user(db, user_data)
    db.close()
    assert user_from_db.email == user_data.email
    assert user_from_db.hashed_password != user_data.password


def test_delete_user():
    user = testing_utils.create_user()
    db = SessionLocal()
    delete_user(db=db, user_id=user.id)
    db.close()


def test_delete_non_existant_user():
    db = SessionLocal()
    with pytest.raises(HTTPException) as exception:
        # User with this id cannot exist in the db
        delete_user(db=db, user_id=-200)
        assert exception.detail == "user with this id does not exist"  # type: ignore
    db.close()


def test_update_user_email_with_correct_unique_email():
    db = SessionLocal()
    user = testing_utils.create_user()
    old_email = user.email
    correct_new_email = f"{uuid.uuid4()}@gmail.com".replace("-", "")
    update_user_email(db=db, user_id=user.id, new_email=correct_new_email)
    assert get_user(db=db, user_id=user.id).email == correct_new_email
    assert get_user_by_email(db=db, email=old_email) is None
    db.close()


def test_update_user_email_with_incorrecct_email():
    db = SessionLocal()
    user = testing_utils.create_user()
    incorrect_new_email = "email_that_schould_not_be_accepted"
    with pytest.raises(HTTPException) as exception:
        update_user_email(db=db, user_id=user.id, new_email=incorrect_new_email)
        assert exception.detail == "incorrect email"  # type: ignore
    # email should remain unchanged
    assert get_user(db=db, user_id=user.id).email == user.email
    assert get_user_by_email(db=db, email=user.email) is not None
    db.close()


def test_update_user_email_with_existing_email():
    db = SessionLocal()
    user_1 = testing_utils.create_user()
    user_2 = testing_utils.create_user()
    with pytest.raises(HTTPException) as exception:
        update_user_email(db=db, user_id=user_1.id, new_email=user_2.email)
        assert exception.detail == "user with this email already exists"  # type: ignore
    assert get_user(db=db, user_id=user_1.id).email == user_1.email
    assert get_user_by_email(db=db, email=user_1.email) is not None
    db.close()


def test_update_user_email_with_wrong_user_id():
    db = SessionLocal()
    user = testing_utils.create_user()
    correct_new_email = f"{uuid.uuid4()}@gmail.com".replace("-", "")
    with pytest.raises(HTTPException) as exception:
        # User with this id does not exist
        update_user_email(db=db, user_id=-200, new_email=correct_new_email)
        assert exception.detail == "user with this id does not exist"  # type: ignore
    db.close()

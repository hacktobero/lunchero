import jwt
import services.user_service as user_service
from schemas import user_schema

import utils.testing_utils as testing_utils
from utils.authentication_utils import JWT_SECRET
from utils.database_utils import SessionLocal


def test_create_user():
    db = SessionLocal()
    user = testing_utils.create_user()
    assert user_service.get_user(db=db, user_id=user.id) is not None


def test_get_token_with_specific_password():
    user = testing_utils.create_user(password="test_password")
    token = testing_utils.get_token(user, password="test_password")
    db = SessionLocal()
    user_db_model = user_service.get_user(db=db, user_id=user.id)
    db.close()
    user_obj = user_schema.User.from_orm(user_db_model)
    assert token == jwt.encode(user_obj.dict(), JWT_SECRET)


def test_get_token_without_password():
    user = testing_utils.create_user()
    token = testing_utils.get_token(user)
    db = SessionLocal()
    user_db_model = user_service.get_user(db=db, user_id=user.id)
    db.close()
    user_obj = user_schema.User.from_orm(user_db_model)
    assert token == jwt.encode(user_obj.dict(), JWT_SECRET)

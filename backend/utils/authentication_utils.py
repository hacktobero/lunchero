import fastapi
import fastapi.security as security
import jwt
import models.user_model as user_model
import schemas.user_schema as user_schema
import services.user_service as user_service
from fastapi import Depends
from sqlalchemy.orm import Session

from utils.database_utils import get_db

oauth2schema = security.OAuth2PasswordBearer(tokenUrl="/api/token")

JWT_SECRET = "1283818238128381823"

# Dependency
async def get_current_user(
    db: Session = Depends(get_db), token: str = Depends(oauth2schema)
) -> user_schema.User:
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        user = db.query(user_model.User).get(payload["id"])
    except:
        raise fastapi.HTTPException(detail="Invalid token", status_code=401)

    return user_schema.User.from_orm(user)


async def authenticate_user(email: str, password: str, db: Session):
    db_user = user_service.get_user_by_email(db, email=email)
    if not db_user:
        return False

    if not db_user.verify_password(password=password):
        return False

    return db_user


async def create_token(user: user_model.User, secret: str = JWT_SECRET):
    user_obj = user_schema.User.from_orm(user)
    token = jwt.encode(user_obj.dict(), secret)
    return dict(access_token=token, token_type="bearer")

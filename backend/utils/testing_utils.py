import sys

from schemas import user_schema

sys.path.append("../no-pressure-query-backend")

import uuid
from typing import Optional

import models.user_model as user_model
from fastapi.testclient import TestClient
from main import app


def create_user(
    email: Optional[str] = None, password: str = "test_password"
) -> user_model.User:
    if email is None:
        email = f"{uuid.uuid4()}@gmail.com".replace("-", "")
    client = TestClient(app)
    r = client.post(
        "/api/users/",
        json={
            "email": email,
            "password": password,
            "first_name": "test_first_name",
            "last_name": "test_last_name",
        },
    )
    response = r.json()
    user = user_model.User(**response)
    return user


def get_token(user: user_model.User, password: str = "test_password") -> str:
    client = TestClient(app)
    r = client.post("/api/token", data={"username": user.email, "password": password})
    response = r.json()
    return response["access_token"]

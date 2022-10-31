import uuid
from datetime import datetime

import models.user_model as user_model
import services.user_service as user_service
from fastapi.testclient import TestClient
from main import app
from utils.database_utils import SessionLocal


def test_create_user_with_correct_data():
    db = SessionLocal()
    client = TestClient(app)
    email = f"email_{datetime.now().strftime('%H%M%S%f')}@gmail.com"
    response = client.post(
        "/api/users/",
        json={"email": email, "password": "test_password", "organisation_id": 1},
    )
    user = user_service.get_user(db=db, user_id=response.json()["id"])
    db.close()
    assert user.email == email
    assert response.status_code == 200
    assert response.json()["email"] == email
    assert response.json()["id"] >= 0


def test_create_user_with_incorrect_password():
    client = TestClient(app)
    email = f"email_{datetime.now().strftime('%H:%M:%S:%f')}"
    response = client.post(
        "/api/users/",
        json={"email": email, "password": "", "organisation_id": 1},
    )
    assert response.status_code == 400
    assert response.json()["detail"] == "Password must be at least 8 characters"


def test_create_user_with_incorrect_email():
    client = TestClient(app)
    email = f"email{datetime.now().strftime('%H:%M:%S:%f')}_wrong_email"
    response = client.post(
        "/api/users/",
        json={"email": email, "password": "test_password", "organisation_id": 1},
    )
    assert response.status_code == 400
    assert response.json()["detail"] == "Email must be a valid email address"

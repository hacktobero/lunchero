import uuid

import services.user_service as user_service
import utils.testing_utils as testing_utils
from fastapi.testclient import TestClient
from main import app
from utils.database_utils import SessionLocal


def test_update_user_email_with_correct_new_email_authenticated():
    client = TestClient(app)
    user = testing_utils.create_user()
    token = testing_utils.get_token(user)
    new_email = f"{uuid.uuid4()}@gmail.com".replace("-", "")
    r = client.get(
        f"/api/users/update_user_email/{user.id}",
        headers={"Authorization": f"Bearer {token}"},
        params={"new_email": new_email},
    )
    print(r.json())
    assert r.status_code == 200
    assert r.json()["message"] == "user has been successfully updated"
    db = SessionLocal()
    assert user_service.get_user_by_email(db=db, email=new_email).id == user.id


def test_update_user_email_with_incorrect_new_email_authenticated():
    client = TestClient(app)
    user = testing_utils.create_user()
    token = testing_utils.get_token(user)
    r = client.get(
        f"/api/users/update_user_email/{user.id}",
        headers={"Authorization": f"Bearer {token}"},
        params={"new_email": f"{uuid.uuid4()}".replace("-", "")},
    )
    assert r.status_code == 400
    assert r.json()["detail"] == "incorrect email"


def test_update_user_email_with_another_users_email_authenticated():
    client = TestClient(app)
    user_1 = testing_utils.create_user()
    user_2 = testing_utils.create_user()
    token = testing_utils.get_token(user_1)
    r = client.get(
        f"/api/users/update_user_email/{user_1.id}",
        headers={"Authorization": f"Bearer {token}"},
        params={"new_email": user_2.email},
    )
    assert r.status_code == 400
    assert r.json()["detail"] == "user with this email already exists"


def test_update_another_users_email_authenticated():
    client = TestClient(app)
    user_1 = testing_utils.create_user()
    user_2 = testing_utils.create_user()
    token = testing_utils.get_token(user_2)
    r = client.get(
        f"/api/users/update_user_email/{user_1.id}",
        headers={"Authorization": f"Bearer {token}"},
        params={"new_email": f"{uuid.uuid4()}@gmail.com".replace("-", "")},
    )
    assert r.status_code == 400
    assert r.json()["detail"] == "You can only update your own account"

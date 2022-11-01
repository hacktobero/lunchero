import services.user_service as user_service
import utils.testing_utils as testing_utils
from fastapi.testclient import TestClient
from main import app
from utils.database_utils import SessionLocal


def test_delete_non_existant_user_authorised():
    client = TestClient(app)
    user = testing_utils.create_user()
    token = testing_utils.get_token(user)
    r = client.get(
        "/api/users/delete_user/-9999999999",
        headers={"Authorization": f"Bearer {token}"},
    )
    response = r.json()
    assert r.status_code == 400
    assert response["detail"] == "You can only delete your own account"


def test_delete_non_existant_user_unauthorised():
    client = TestClient(app)
    r = client.get("/api/users/delete_user/-99999999999")
    response = r.json()
    assert r.status_code == 401
    assert response["detail"] == "Not authenticated"


def test_delete_his_own_account():
    client = TestClient(app)
    user = testing_utils.create_user()
    print(f"user_id: {user.id}")
    token = testing_utils.get_token(user)
    r = client.get(
        f"/api/users/delete_user/{user.id}",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert r.status_code == 200
    db = SessionLocal()
    assert user_service.get_user(db=db, user_id=user.id) is None
    db.close()


def test_delete_existing_user_when_unauthorised():
    client = TestClient(app)
    user = testing_utils.create_user()
    r = client.get(f"/api/users/delete_user/{user.id}")
    assert r.status_code == 401
    assert r.json()["detail"] == "Not authenticated"
    db = SessionLocal()
    assert user_service.get_user(db=db, user_id=user.id) is not None
    db.close()


def test_delete_another_user_authorised():
    client = TestClient(app)
    user_1 = testing_utils.create_user()
    user_2 = testing_utils.create_user()
    print(f"user_id: {user_1.id}")
    token = testing_utils.get_token(user_1)
    r = client.get(
        f"/api/users/delete_user/{user_2.id}",
        headers={"Authorization": f"Bearer {token}"},
    )
    assert r.status_code == 400
    assert r.json()["detail"] == "You can only delete your own account"

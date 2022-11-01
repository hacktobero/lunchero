import utils.testing_utils as testing_utils
from fastapi.testclient import TestClient
from main import app


def test_read_correctly_created_user():
    client = TestClient(app)
    user = testing_utils.create_user()
    response = client.get(f"/api/users/{user.id}")
    assert response.status_code == 200
    assert response.json()["email"] == user.email
    assert response.json()["id"] == user.id


def test_non_existing_user():
    client = TestClient(app)
    # Wrong id
    response = client.get(f"/api/users/{-1230320}")
    assert response.status_code == 400
    assert response.json()["detail"] == "User does not exist"

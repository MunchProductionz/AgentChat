from fastapi.testclient import TestClient
from server.api import app

client = TestClient(app)

def test_read_item():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "The API is up and running"}
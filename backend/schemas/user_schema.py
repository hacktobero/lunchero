from pydantic import BaseModel
import json

class UserBase(BaseModel):
    email: str
    first_name: str
    last_name: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

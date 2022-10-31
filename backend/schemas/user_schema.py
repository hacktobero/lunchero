import json

from pydantic import BaseModel


class UserBase(BaseModel):
    email: str
    organisation_id: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

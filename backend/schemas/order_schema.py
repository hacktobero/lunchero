import json

from pydantic import BaseModel


class OrderBase(BaseModel):
    meal_id: int
    user_id: int


class OrderCreate(OrderBase):
    pass


class Order(OrderBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

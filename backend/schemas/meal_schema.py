import json

from pydantic import BaseModel


class MealBase(BaseModel):
    description: str
    menu_id: int


class MealCreate(MealBase):
    pass


class Meal(MealBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

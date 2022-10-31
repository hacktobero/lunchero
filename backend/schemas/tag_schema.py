import json

from pydantic import BaseModel


class TagBase(BaseModel):
    name: str
    meal_id: int


class TagCreate(TagBase):
    pass


class Tag(TagBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

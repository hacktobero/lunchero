import json
from datetime import datetime

from pydantic import BaseModel


class MenuBase(BaseModel):
    day: datetime
    organisation_id: int


class MenuCreate(MenuBase):
    pass


class Menu(MenuBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

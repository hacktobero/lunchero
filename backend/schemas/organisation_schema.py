import json

from pydantic import BaseModel


class OrganisationBase(BaseModel):
    name: str
    role: str


class OrganisationCreate(OrganisationBase):
    pass


class Organisation(OrganisationBase):
    id: int

    class Config:
        orm_mode = True
        json_loads = json.loads
        json_dumps = json.dumps

from sqlalchemy import Column, Integer, String
from utils.database_utils import Base


class Organisation(Base):
    __tablename__ = 'organisations'
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50))
    role = Column(String(50))

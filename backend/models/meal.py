from sqlalchemy import Column, Integer, String, ForeignKey
from utils.database_utils import Base


class Meal(Base):
    __tablename__ = 'meals'
    id = Column(Integer, primary_key=True, index=True)
    menu_id = Column(Integer, ForeignKey("menus.id"), nullable=False)
    description = Column(String(500))

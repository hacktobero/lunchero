from sqlalchemy import Column, Integer, String, ForeignKey
from utils.database_utils import Base


class Tag(Base):
    __tablename__ = 'tags'
    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey('meals.id'), nullable=False)
    name = Column(String(80))

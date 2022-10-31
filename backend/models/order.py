from sqlalchemy import Column, Integer, String, ForeignKey
from utils.database_utils import Base


class Order(Base):
    __tablename__ = 'orders'
    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey('meals.id'), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

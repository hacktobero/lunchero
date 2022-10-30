from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from utils.database_utils import Base


class Order:
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey("meals.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    meal = relationship("Meal", back_populates="orders")
    user = relationship("User", back_populates="orders")

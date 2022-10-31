from sqlalchemy import Column, ForeignKey, Integer
from sqlalchemy.orm import relationship

from models.base import Base


class Order(Base):
    __tablename__ = "orders"

    id: int = Column(Integer, primary_key=True, index=True)  # type: ignore
    meal_id: int = Column(Integer, ForeignKey("meals.id"), nullable=False)  # type: ignore
    user_id: int = Column(Integer, ForeignKey("users.id"), nullable=False)  # type: ignore

    meal = relationship("Meal", back_populates="orders")
    user = relationship("User", back_populates="orders")

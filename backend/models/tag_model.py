from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from models.base import Base


class Tag(Base):
    __tablename__ = "tags"

    id: int = Column(Integer, primary_key=True, index=True)  # type: ignore
    meal_id: int = Column(Integer, ForeignKey("meals.id"), nullable=False)  # type: ignore
    name: str = Column(String(80), nullable=False)  # type: ignore

    meal = relationship("Meal", back_populates="tags")

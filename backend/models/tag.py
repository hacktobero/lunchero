from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from utils.database_utils import Base


class Tag(Base):
    __tablename__ = "tags"
    id = Column(Integer, primary_key=True, index=True)
    meal_id = Column(Integer, ForeignKey("meals.id"), nullable=False)
    name = Column(String(80))

    meal = relationship("Meal", back_populates="tags")

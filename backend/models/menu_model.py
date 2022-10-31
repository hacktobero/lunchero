from datetime import datetime

from sqlalchemy import Column, DateTime, ForeignKey, Integer
from sqlalchemy.orm import relationship

from models.base import Base


class Menu(Base):
    __tablename__ = "menus"

    id: int = Column(Integer, primary_key=True, index=True)  # type: ignore
    organisation_id: int = Column(Integer, ForeignKey("organisations.id"), nullable=False)  # type: ignore
    day: datetime = Column(DateTime, nullable=False)  # type: ignore

    organisation = relationship("Organisation", back_populates="menus")
    meals = relationship("Meal", back_populates="menu")

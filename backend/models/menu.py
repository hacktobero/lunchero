from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from utils.database_utils import Base


class Menu(Base):
    __tablename__ = "menus"
    id = Column(Integer, primary_key=True, index=True)
    organisation_id = Column(Integer, ForeignKey("organisations.id"), nullable=False)
    day = Column(DateTime, nullable=False)

    orgranisation = relationship("Organisation", back_populates="menus")
    meals = relationship("Meal", back_populates="menu")

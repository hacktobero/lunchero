from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from models.base import Base


class Meal(Base):
    __tablename__ = "meals"

    id: int = Column(Integer, primary_key=True, index=True)  # type: ignore
    menu_id: int = Column(Integer, ForeignKey("menus.id"), nullable=False)  # type: ignore
    description: str = Column(String(500), nullable=False)  # type: ignore

    menu = relationship("Menu", back_populates="meals")
    orders = relationship("Order", back_populates="meal")
    tags = relationship("Tag", back_populates="meal")

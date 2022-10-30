from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from utils.database_utils import Base


class Meal(Base):
    __tablename__ = "meals"
    id = Column(Integer, primary_key=True, index=True)
    menu_id = Column(Integer, ForeignKey("menus.id"), nullable=False)
    description = Column(String(500))

    menu = relationship("Menu", back_populates="meals")
    orders = relationship("Order", back_populates="meal")
    tags = relationship("Tag", back_populates="meal")

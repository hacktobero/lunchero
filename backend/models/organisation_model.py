from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from models.base import Base


class Organisation(Base):
    __tablename__ = "organisations"

    id: int = Column(Integer, primary_key=True, index=True)  # type: ignore
    name: str = Column(String(50), nullable=False)  # type: ignore
    role: str = Column(String(50), nullable=False)  # type: ignore

    users = relationship("User", back_populates="organisation")
    menus = relationship("Menu", back_populates="organisation")

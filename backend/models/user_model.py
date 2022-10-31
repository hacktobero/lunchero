import passlib.hash as hash
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from models.base import Base


class User(Base):
    __tablename__ = "users"

    id: int = Column(Integer, primary_key=True, index=True)  # type: ignore
    email: str = Column(String, unique=True, index=True)  # type: ignore
    hashed_password: str = Column(String, nullable=False)  # type: ignore
    organisation_id: int = Column(
        Integer, ForeignKey("organisations.id"), nullable=False
    )  # type: ignore

    organisation = relationship("Organisation", back_populates="users")
    orders = relationship("Order", back_populates="user")

    def verify_password(self, password: str):
        return hash.bcrypt.verify(password, self.hashed_password)

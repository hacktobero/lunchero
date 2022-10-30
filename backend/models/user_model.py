import passlib.hash as hash
from sqlalchemy import Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from utils.database_utils import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    organisation_id = Column(Integer, ForeignKey("organisations.id"), nullable=False)

    organisation = relationship("Organisation", back_populates="users")
    orders = relationship("Orders", back_populates="user")

    def verify_password(self, password: str):
        return hash.bcrypt.verify(password, self.hashed_password)

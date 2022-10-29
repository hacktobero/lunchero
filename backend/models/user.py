from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
import passlib.hash as hash
from backend.models import organisation
from utils.database_utils import Base


class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True)
    organisation = Column(Integer, ForeignKey("organisations.id"), nullable=False)

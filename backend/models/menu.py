from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from utils.database_utils import Base


class Menu(Base):
    __tablename__ = 'menus'
    id = Column(Integer, primary_key=True, index=True)
    org_id = Column(Integer, ForeignKey("organisations.id"), nullable=False)
    day = Column(DateTime)

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


Base = declarative_base()


from models.organisation_model import Organisation
from models.menu_model import Menu
from models.meal_model import Meal
from models.order_model import Order
from models.tag_model import Tag


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

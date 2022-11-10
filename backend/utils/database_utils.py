import os

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

if os.getenv("RUNNING_INSIDE_GITHUB_ACTIONS") == '':
    engine = create_engine(
        os.environ["DB_CONNECTION_URL"]
    )
else:
    engine = create_engine(
        os.environ["DB_CONNECTION_URL"], connect_args={"check_same_thread": False}
    )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

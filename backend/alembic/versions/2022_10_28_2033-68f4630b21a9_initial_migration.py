"""initial migration

Revision ID: 68f4630b21a9
Revises: 
Create Date: 2022-10-28 20:33:37.419382

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = '68f4630b21a9'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.execute('''
    CREATE TABLE "Organizations" (
      "org_id"	INTEGER NOT NULL,
      "name"	TEXT NOT NULL UNIQUE,
      PRIMARY KEY("org_id")
    )
    ''')

    op.execute('''
    CREATE TABLE "Users" (
      "user_id"	INTEGER NOT NULL,
      "username"	TEXT NOT NULL UNIQUE,
      "org_id"	INTEGER NOT NULL,
      "role"	TEXT NOT NULL,
      PRIMARY KEY("user_id"),
      FOREIGN KEY("org_id") REFERENCES "Organizations"("org_id")
    )
    ''')
    
    op.execute('''
    CREATE TABLE "Tags" (
      "tag_id"	INTEGER NOT NULL,
      "name"	TEXT NOT NULL,
      PRIMARY KEY("tag_id")
    )
    ''')

    op.execute('''
    CREATE TABLE "Menus" (
      "menu_id"	INTEGER NOT NULL,
      "org_id"	INTEGER NOT NULL,
      "day"	INTEGER NOT NULL,
      PRIMARY KEY("menu_id"),
      FOREIGN KEY("org_id") REFERENCES "Organizations"("org_id")
    )
    ''')

    op.execute('''
    CREATE TABLE "Meals" (
      "meal_id"	INTEGER NOT NULL,
      "menu_id"	INTEGER NOT NULL,
      "title"	TEXT NOT NULL,
      "description"	TEXT NOT NULL,
      "category"	TEXT NOT NULL,
      PRIMARY KEY("meal_id"),
      FOREIGN KEY("menu_id") REFERENCES "Menus"("menu_id")
    )
    ''')



def downgrade():
    op.execute('DROP TABLE "Tags"')
    op.execute('DROP TABLE "Meals"')
    op.execute('DROP TABLE "Menus"')
    op.execute('DROP TABLE "Users"')
    op.execute('DROP TABLE "Organizations"')

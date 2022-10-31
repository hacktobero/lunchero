"""create organisations table

Revision ID: e3f88ceea0be
Revises: 
Create Date: 2022-10-30 17:47:31.474155

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "e3f88ceea0be"
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "organisations",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column("name", sa.String(50), nullable=False),
        sa.Column("role", sa.String(128), nullable=False),
    )


def downgrade():
    op.drop_table("organisations")

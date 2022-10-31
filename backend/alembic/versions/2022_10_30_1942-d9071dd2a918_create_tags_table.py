"""create tags table

Revision ID: d9071dd2a918
Revises: b635fa25116b
Create Date: 2022-10-30 19:42:44.474543

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "d9071dd2a918"
down_revision = "b635fa25116b"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "tags",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column(
            "meal_id",
            sa.Integer,
            sa.ForeignKey("meals.id"),
            nullable=False,
        ),
        sa.Column("name", sa.String(50), nullable=False),
    )


def downgrade():
    op.drop_table("tags")

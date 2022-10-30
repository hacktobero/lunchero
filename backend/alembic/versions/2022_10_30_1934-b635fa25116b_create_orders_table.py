"""create orders table

Revision ID: b635fa25116b
Revises: af76db25961d
Create Date: 2022-10-30 19:34:36.407645

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "b635fa25116b"
down_revision = "af76db25961d"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "orders",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column(
            "meal_id",
            sa.Integer,
            sa.ForeignKey("meals.id"),
            nullable=False,
        ),
        sa.Column(
            "user_id",
            sa.Integer,
            sa.ForeignKey("users.id"),
            nullable=False,
        ),
    )


def downgrade():
    op.drop_table("orders")

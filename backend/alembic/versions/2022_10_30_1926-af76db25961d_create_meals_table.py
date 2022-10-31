"""create meals table

Revision ID: af76db25961d
Revises: c51322e9bf56
Create Date: 2022-10-30 19:26:22.679037

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "af76db25961d"
down_revision = "c51322e9bf56"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "meals",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column(
            "menu_id",
            sa.Integer,
            sa.ForeignKey("menus.id"),
            nullable=False,
        ),
        sa.Column("description", sa.String(500), nullable=False),
    )


def downgrade():
    op.drop_table("meals")

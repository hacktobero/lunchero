"""create menus table

Revision ID: c51322e9bf56
Revises: 7522652e272b
Create Date: 2022-10-30 17:59:47.156144

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "c51322e9bf56"
down_revision = "7522652e272b"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "menus",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column(
            "organisation_id",
            sa.Integer,
            sa.ForeignKey("orgranisations.id"),
            nullable=False,
        ),
        sa.Column("day", sa.DateTime, nullable=False),
    )


def downgrade():
    op.drop_table("menus")

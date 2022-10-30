"""create users table

Revision ID: 7522652e272b
Revises: e3f88ceea0be
Create Date: 2022-10-30 17:49:14.816219

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = "7522652e272b"
down_revision = "e3f88ceea0be"
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
        "users",
        sa.Column("id", sa.Integer, primary_key=True, index=True),
        sa.Column(
            "organisation_id",
            sa.Integer,
            sa.ForeignKey("orgranisations.id"),
            nullable=False,
        ),
        sa.Column("email", sa.String(50), nullable=False, index=True),
        sa.Column("hashed_password", sa.String(128), nullable=False),
    )


def downgrade():
    op.drop_table("users")

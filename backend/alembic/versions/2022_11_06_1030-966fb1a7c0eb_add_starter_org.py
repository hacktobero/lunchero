"""add starter org

Revision ID: 966fb1a7c0eb
Revises: d9071dd2a918
Create Date: 2022-11-06 10:30:08.882794

"""
import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision = '966fb1a7c0eb'
down_revision = 'd9071dd2a918'
branch_labels = None
depends_on = None


def upgrade():
    op.execute(
        """
        INSERT INTO 
            organisations (id, name, role)
        VALUES
            (1, 'starter org', 'starter_org')
        """
    )


def downgrade():
    op.execute(
        """
        DELETE FROM
            organisations
        WHERE
            id = 1
        """
    )

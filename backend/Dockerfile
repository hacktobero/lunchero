FROM python:3.10

WORKDIR /code/

COPY . /code/

RUN pip install -r requirements.txt
RUN alembic upgrade head

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

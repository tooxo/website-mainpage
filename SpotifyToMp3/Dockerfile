FROM python:3.7-alpine

RUN apk add gcc g++ libc-dev libev-dev

COPY requirements.txt .
RUN sh -c "pip install -r requirements.txt"

WORKDIR /usr/src/app/

COPY . .

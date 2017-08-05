FROM python:3.4
ENV PYTHONUNBUFFERED 1

RUN apt-get -y update \
  && apt-get -y install --no-install-recommends postgresql-client \
  && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/miley
WORKDIR /usr/src/miley
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .

EXPOSE 8000
CMD ["sh", "bin/server"]

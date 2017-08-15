FROM python:3.6

WORKDIR /usr/src/miley
ENV PYTHONUNBUFFERED 1
# RUN mkdir -p /usr/src/miley

# RUN apt-get -y update \
#   && apt-get -y install --no-install-recommends postgresql-client \
#   && rm -rf /var/lib/apt/lists/*

ADD requirements.txt ./
RUN pip install -r requirements.txt

COPY . /usr/src/miley

CMD ["sh", "bin/server"]
EXPOSE 8000

FROM ubuntu

RUN apt-get -y update \
  && apt-get -y install --no-install-recommends openssh-server
RUN mkdir -p /var/run/sshd

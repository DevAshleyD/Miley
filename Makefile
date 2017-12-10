build:
	docker build . -t itstommy/miley

css_watch:
	bin/css

dev_web:
	docker-compose up

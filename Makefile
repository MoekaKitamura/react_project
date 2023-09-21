CONTAINER=docker compose exec app

build:
	docker compose build

up:
	docker compose up -d

down:
	docker compose down --rmi local -v

start:
	docker compose start

stop:
	docker compose stop


access:
	$(CONTAINER) /bin/bash

ts-node:
	$(CONTAINER) npx ts-node

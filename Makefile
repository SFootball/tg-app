build:
	docker build --platform=linux/amd64 -t sfootball_tgapp .
local_build:
	docker build -t sfootball_tgapp_local .
push:
	docker push space-football.cr.cloud.ru/sfootball_tgapp:v.1
tag:
	docker tag sfootball_tgapp space-football.cr.cloud.ru/sfootball_tgapp:v.1
compose_run:
	docker compose --env-file .env up --build
build:
	docker build --platform=linux/amd64 --tag space-football.cr.cloud.ru/sfootball_tgapp:v.1.5 .
local_build:
	docker build  -t sfootball_tgapp_local .
push:
	docker push space-football.cr.cloud.ru/sfootball_tgapp:v.1.5
# tag:
# 	docker tag sfootball_tgapp space-football.cr.cloud.ru/sfootball_tgapp:v.1
compose_run:
	docker compose --env-file .env up --build
local_run:
	docker run  --env API_URL=https://api-service.containers.cloud.ru -p 3000:3000 --name sfootball_tgapp_local --rm sfootball_tgapp_local
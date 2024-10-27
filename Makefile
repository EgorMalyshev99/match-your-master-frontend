init:
	cp ./.env.example ./.env
	cp ./apps/dashboard/.env.example ./apps/dashboard/.env
	cp ./apps/landing/.env.example ./apps/landing/.env
	make up
up:
	docker compose -f docker-compose.yml up -d --build
down:
	docker compose -f docker-compose.yml down

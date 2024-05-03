include .env
# .PHONY: clean test security build run

#========================#
#== DATABASE MIGRATION ==#
#========================#

# APP_NAME = apiserver
# BUILD_DIR = $(PWD)/build
MIGRATIONS_FOLDER = ./backend/platform/migrations
SEEDS_FOLDER = ./backend/platform/seeds
name = 1


# migrate create -ext sql -dir db/migrations create_posts_table
# make migrate.create name=create_new_migration
migrate.create:
# docker compose -f ${DOCKER_COMPOSE_FILE} --profile tools run --rm migrate create -ext sql -dir $(MIGRATIONS_FOLDER) ${name}
	migrate create -ext sql -dir $(MIGRATIONS_FOLDER) ${name}

## Run migrations UP
migrate.up:
# For local
	migrate -path $(MIGRATIONS_FOLDER) -database ${DATABASE_URL} up
# for server and docker-compose.yml
# docker compose -f $(DOCKER_COMPOSE_FILE) --profile tools run --rm migrate up


## Run migrations DOWN (ROLLBACK)
migrate.down:
	docker compose -f $(DOCKER_COMPOSE_FILE) --profile tools run --rm migrate down
# migrate -path $(MIGRATIONS_FOLDER) -database $(DATABASE_URL) down

## Run migrations FORCE
migrate.force:
	docker compose -f $(DOCKER_COMPOSE_FILE) --profile tools run --rm migrate force $(name)
#migrate -path $(MIGRATIONS_FOLDER) -database $(DATABASE_URL) force $(name)

shell.db:
	docker compose -f ${DOCKER_COMPOSE_FILE} exec postgres psql -U $(POSTGRES_USER) -d $(POSTGRES_DB)

lang.start:
	cd backend/resources/langs/ ; goi18n merge *.toml

lang.merge:
	cd backend/resources/langs/ ; goi18n merge translate.*.toml active.*.toml ; cat active.uk.toml > uk.toml ; cat active.ru.toml > ru.toml

lang.del:
	find ./backend/ -type f \( -iname translate.\* -o -iname active.\* \) -delete -print

# start.backend:
# 	cd ./backend/ ; go run main.go && cd ./frontend ; npm run dev ;

# start.frontend:
# 	cd ./backend/ ; go run main.go && cd ./frontend ; npm run dev ;

# stop:
# 	pkill -f "next-server" ; pkill -f "go run main.go"

# start:
# 	cd ./backend/ ; go run main.go; 
# 	cd ../frontend ; npm run dev;


# start:
# 	cd ./backend/ ; go run main.go & echo $$! > backend.pid ; 
# 	cd ../frontend ; npm run dev & echo $$! > frontend.pid ;

# stop:
# 	if [ -f ./backend.pid ]; then \
# 		kill `cat ./backend.pid` && rm ./backend.pid; \
# 	fi
# 	pkill -f "next-server"
# 	if [ -f ./frontend.pid ]; then \
# 		kill `cat ./frontend.pid` && rm ./frontend.pid; \
# 	fi


# frontend.build:
# 	cd ./frontend ; npm run build

# frontend.build.start:
# 	cd ./frontend ; npm run build ; npm run start

# frontend.build.start.prod:
# 	cd ./frontend ; npm run build ; npm run start:prod

# make docker.build.start ver=1.005
docker.build.start:
	go mod tidy ; docker login ; docker build --no-cache -t api-main:$(ver) -f Dockerfile.production . ; docker tag api-main:$(ver) anrysys/api-main:$(ver) ; docker push anrysys/api-main:$(ver)
#	echo $(ver); echo $(ver); echo $(ver);
# seed:
# 	PGPASSWORD=$(POSTGRES_PASSWORD) psql -h ${POSTGRES_HOST} -p ${POSTGRES_PORT} -U$(POSTGRES_USER) -d $(POSTGRES_DB) -a -f $(SEEDS_FOLDER)/001_seed_user_table.sql
# 	PGPASSWORD=$(POSTGRES_PASSWORD) psql -h ${POSTGRES_HOST} -p ${POSTGRES_PORT} -U$(POSTGRES_USER) -d $(POSTGRES_DB) -a -f $(SEEDS_FOLDER)/002_seed_book_table.sql

dev: 
	docker-compose up -d

dev-down:
	docker-compose down

start-server:
	air

# Forntend: eslint --fix (in current directory)
ff:
	cd ./frontend/ ; ./node_modules/.bin/eslint --fix . ; cd ../

# install-modules:
# 	go get github.com/go-playground/validator/v10
# 	go get -u github.com/gofiber/fiber/v2
# 	go get -u github.com/golang-jwt/jwt/v4
# 	go get github.com/redis/go-redis/v9
# 	go get github.com/satori/go.uuid
# 	go get github.com/spf13/viper
# 	go get gorm.io/driver/postgres
# 	go get -u gorm.io/gorm
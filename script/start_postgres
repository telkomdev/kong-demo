#!/bin/bash

docker run --rm --name kong-database \
--network=kong-net \
-v "${PWD}/postgres/data:/var/lib/postgresql/data" \
-e "POSTGRES_USER=user" \
-e "POSTGRES_PASSWORD=12345" \
-e "POSTGRES_DB=kong_db" \
-p 5432:5432 \
postgres:9.6
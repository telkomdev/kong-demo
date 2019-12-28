#!/bin/bash

docker run -d --rm --name konga \
--network=kong-net \
-p 1337:1337 \
-e "DB_ADAPTER=postgres" \
-e "DB_HOST=kong-database" \
-e "DB_USER=user" \
-e "DB_PASSWORD=12345" \
-e "DB_DATABASE=konga_db" \
-e "TOKEN_SECRET=km1GUr4RkcQD7DewhJPNXrCuZwcKmqjb" \
-e "KONGA_HOOK_TIMEOUT=120000" \
-e "NODE_ENV=production" \
pantsel/konga:next
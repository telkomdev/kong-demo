# Kong API Gateway example

Just proof of concept using Kong (with Postgres, you can use Apache Cassandra) and NodeJs

## Getting started

#### Important note
From official github of Kong there is one issue https://github.com/Kong/kong/issues/5324, so we can't use kong's latest docker image. So we will use `kong:1.3.0-alpine` docker image.

Create `kong network`
```shell
$ ./script/create_kong_network
```

Start `postgres`
```shell
$ ./script/start_postgres
```

Migrate `kong database`
```shell
$ ./script/migration_bootstrap
$ ./script/migration_up
```

Migrate `kong admin database`
```shell
$ ./script/prepare_konga
```

Start `kong api gateway`
```shell
$ ./script/start_kong
```

Start `kong admin`
```shell
$ ./script/start_konga
```

Open `kong admin UI` http://localhost:1337/

#### Prepare Microservices example
There are two `microservices` example for this demo, `employee-service` and `product-service`. It is just simple `microservice` written in `Nodejs`. So we have to build each this microservice into `Docker image`.

Build `employee-service`

```shell
$ cd employee-service
$ make build
```

Run
```shell
$ make run-docker
```

Build `product-service`

```shell
$ cd product-service
$ make build
```

Run
```shell
$ make run-docker
```
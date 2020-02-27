# Docker Compose

## Docker compose file
> docker-compose.yml

``` yml
web:
    build: .
    links:
        - redis
    ports:
        - "80:5000"
redis:
    image: redis

```
## Format name 
`<project>_<service>_<number>`
## Commands

### Build image

``` bash
$ docker-compose build
```
### Container
* run
``` bash
$ docker-compose up
```
* `-d` refresh containers due to changes
``` bash
$ docker-compose up -d
```
* logs
``` bash
$ docker-compose logs <SERVICE>
```
* stop all containers
``` bash
$ docker-compose stop
```
* remove stoped containers
``` bash
$ docker-compose rm <SERVICE>
```
* remove all containers
``` bash
$ docker-compose rm
```
* stop and remove
``` bash
$ docker-compose down
```

### Rename `docker-compose` file

``` bash
$ docker-compose -f file_name.yml
```

## Scale
### Load balancer
> docker-compose.yml
``` yml
web:
    build: .
    links:
        - redis
    ports:
        - "80:5000"
redis:
    image: redis
lb:
    image: tutum/haproxy
    links: 
        - web
    ports:
        - "80:80"
    environment:
        - BACKEND_PORT=5000
        - BALANCE=roundrobin
```

### Run
``` bash
docker-compose scale web=10
```

### Recreate without dependencies
``` bash
docker-compose build --force-recreate --no-deps lb 
```
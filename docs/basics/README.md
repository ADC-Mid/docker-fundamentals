# Comandos Básicos

## verificar que el demonio se ejecuta como servicio
```
$ service docker status 
```

## example output

```
● docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor pre
   Active: active (running) since Fri 2018-08-10 18:53:02 CDT; 35min ago
     Docs: https://docs.docker.com
 Main PID: 2090 (dockerd)
    Tasks: 24
   CGroup: /system.slice/docker.service
           ├─2090 /usr/bin/dockerd -H fd://
           └─2202 docker-containerd --config /var/run/docker/containerd/co

ago 10 18:52:52 raul-lenovo dockerd[2090]: time="2018-08-10T18:52:52.68255
ago 10 18:52:52 raul-lenovo dockerd[2090]: time="2018-08-10T18:52:52.68295
ago 10 18:52:52 raul-lenovo dockerd[2090]: time="2018-08-10T18:52:52.68306
ago 10 18:52:52 raul-lenovo dockerd[2090]: time="2018-08-10T18:52:52.68793
ago 10 18:53:02 raul-lenovo systemd[1]: Started Docker Application Contain
lines 1-20/20 (END)

```
## reiniciar demonio de Docker
```
$ sudo service docker start
```

## activar logs en systemctl
```
$ journalctl -u docker
```

## dibujar proceso de Docker
```
$ ps -fea | grep docker
```
# conectar demonio de manera remota
```
$ vi etc/default/docker
$ docker - H tcp://0.0.0.0:2375

$ export DOCKER_HOST="tcp://0.0.0.0:2375"
```
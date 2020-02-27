# Crear imágenes con Dockerfile
## `Ejemplo`
> Dockerfile
``` Dockerfile
FROM ubuntu
RUN apt-get install -y curl
RUN apt-get -y vim
```

## Construir imagen
``` bash
$ docker build .
```

## listar imagenes 
``` bash
$ docker images
```

## pasar un tag
``` bash
$ docker build -t <TAG> <PATH>
$ docker build -t ubuntu_vim-curl .
``` 
## no cache
### Docker usa cache y este se puede invalidar
``` bash
$ docker build --no-cache -t <TAG> <PATH>
```

## entrar al contenedor de forma interactiva
``` bash
$ docker exec -ti <NAME or ID> bash
```
## Etiquetas que puede contener un Dockerfile
> Dockerfile
``` Dockerfile
FROM [imagen]:[tag]
    MAINTAINER joaquinaraujojs@gmail.com
    LABEL"[clave]": "[valor]"
WORKDIR/[directorio raíz del proyecto]
COPY[ruta-relativa-del-archivo/carpeta] [destino-del-archivo/carpeta] ./
ADD[URL del archivo ha descargar]
RUN[comando] && [comando] && ... && \
    CMD [comando]
ENTRYPOINT[comando]
EXPOSE [puerto]
    ENV [variable de entorno]
```
- Inicializa la constricción de una imagen a partir de un archivo Dockerfile.
``` bash
$ docker build [ruta del dockerfile] 
```
- Permite establecer un nombre y un tag a la imagen a generar.
``` bash
$ docker build -t [nombre-de-la-imagen:tag] [ruta...]
```

## Run 
`-P` elige un puerto aletorio en mi maquina local

`-d` ejecuta como demonio
``` bash
$ docker run -d -P app
```
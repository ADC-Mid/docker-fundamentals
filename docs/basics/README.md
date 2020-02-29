# Verificando instalación

## Verificar que el demonio se ejecuta como servicio

Antes que empezemos a utilizar docker, verifiquemos que el servicio este levantado y funcionando correctamente, para eso ejecutamos el siguiente comando.
```bash
$ service docker status 
```

## Example output

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

## Comandos básicos de docker

   Cuando empezamos con docker, siempre hay que conocer algunos comandos que nos van a permitir manipular dicha herramienta.
   Recordemos que docker, es un sistema de contenedores y esos contenedores son creados por imagenes de algún servicio o aplicación previamente.

   Para poder visualizar las imagenes que tenemos en nuestro docker, simplemente ejecutamos la siguiente función:

   ```bash
   sudo docker images
   ```
   Todos los comandos a ejecutar con docker siempre hay que hacerlo con **sudo**

   Cuando ejecutemos el comando, visualizamos una lista completa de imagenes en nuestro sistema:

   ![Docker](https://imagesadc.s3.amazonaws.com/material/docker/Screenshot+from+2020-02-28+22-56-00.png)


   ### Visualizando contenedores activos

   Para visualizar los contenedores que tenemos levantados ejecutamos el siguiente comando:

   ```bash
   sudo docker ps
   ```

   Si quisieramos ver el todos los contenedores, sin importar el estado en que se encuentran ejecutamos el siguiente comando:

   ```bash
   sudo docker ps -a
   ```

   ### Detener contenedores

   A veces requerimos detener algún contenedor, para eso ejecutamos el siguiente comando:

   ```bash
   sudo docker stop nameContainer/idContainer
   ```

   ### Eliminar contenedores

   Para eliminar un contenedor ejecutamos el siguiente comando:

   ```bash
   sudo docker rm nameContainer/idContainer
   ```

   ### Eliminamos Imagenes

   Para poder eliminar imagenes de nuestro docker ejecutamos el siguiente comando:
   ```bash
   sudo docker rmi nameContainer/idContainer
   ```


   ## ¿Que nos permite docker?
   Nos permite levantar un proyecto de forma rapida, evitanto muchos problemas de compatibilidad dependiendo del enviroment de cada uno. 
   Otra de las funcionalidades super interesantes de docker, es la instalacion de servicios.

   ¿Que tipo de servicios podemos levantar con docker?

   ### Base de datos:

   - [Mysql](https://hub.docker.com/_/mysql)
   - [Postgres](https://hub.docker.com/_/postgres)
   - [Mongo Db](https://hub.docker.com/_/mongo)
   - [Mas ...](https://hub.docker.com/)

   ### Colas
   - [Rabbit Mq](https://hub.docker.com/_/rabbitmq)

   ### Servidores
   - [Nginx](https://hub.docker.com/_/nginx)

   ### Sistemas Operativos
   - [Ubuntu](https://hub.docker.com/_/ubuntu)


   ## ¿Donde podemos descargar esas imagenes?
   Docker, maneja su propio repositorio, donde podemos encontar imagenes creadas por la comunidad o imagenes oficiales de las empreas, a ese lugar lo llamamos
  [DockerHub](https://hub.docker.com/)

   ## Instalado mysql

   Para instalar el servicio de mysql, solo basta escribir esto en la consola: 

   ```bash
   sudo docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql:5.6
   ```

   ## Instalando Postgres

   ```bash
   sudo docker run --name some-postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
   ```

   ## Instalando MongoDb

   ```bash
   sudo docker run --name some-mongo -p 27017:27017 -d mongo:4.0.13-xenial 
   ```


   



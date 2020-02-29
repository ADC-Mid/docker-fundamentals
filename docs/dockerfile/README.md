# Crear imágenes con Dockerfile

Cuando terminamos un proyecto y lo queremos enviar a producción, que mejor manera que dockerizar el proyecto

Para hacer esto es muy simple.
En el proyecto a trabajar, hay que crear un archivo llamado **Dockerfile**, para este ejemplo estaremos dockerizando un proyecto hecho en node js.
En el Dockerfile agregamos el siguiente código:

## `Ejemplo`
> Dockerfile
``` Dockerfile
from node:10.13-alpine
RUN mkdir app
WORKDIR /app
COPY . .
ENV PORT=3000
RUN npm install
EXPOSE $PORT
CMD node app.js
```
- En la linea uno **from node:10.13-alpine** vamos a seleccionar una imagen, para este caso como es node js, estoy eligiendo la version de node 10 pero con la versiona mas liviana (alpine)

- En la segunda linea tenemos un comando llamado **RUN**, que me va a permitir ejecutar comandos en consola, en este caso **mkdir app** la cual crea una carpeta.

- Despues le establecemos que el workspase se va a posicionar en **/app**.
- Copiamos toda la informacion donde nos encontramos al workspace seleccionado **COPY ..**
- Creamos un enviroment para nuestro sistema ENV
- Ejecutamos un comando para instalar dependencias
- Indicamos que puerto vamos a exponer, para este caso hacemor referencia al enviroment **PORT**
- Ejecutamos un comando, donde le indicamos que ejecute la aplicacion **node app.js**



## Construir imagen
``` bash
$ docker build -t "nombre:tag" .
```

## listar imagenes 
``` bash
$ docker images
```
## Instalar el dockerFile

```
docker run -dti --name "name-container" -p 3000:3000 "name-image:tag"
```

## Run 
`-P` elige un puerto aletorio en mi maquina local

`-d` ejecuta como demonio
``` bash
$ docker run -d -P app
```
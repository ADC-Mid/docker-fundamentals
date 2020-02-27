# Docker

![Docker](https://d33wubrfki0l68.cloudfront.net/33282cd91fc50462bc515a615cccafa37fe07a63/3e476/images/logo.png)

**Docker** es una plataforma abierta para que desarrolladores y administradores de sistemas desarrollen, envíen y ejecuten aplicaciones distribuidas, ya sea en computadoras portátiles, maquinas virtuales de centros de datos o en la nube.

**Docker** empaqueta software en **contenedores** que incluyen en ellos todo lo necesario para que dicho software se ejecute, incluidas librerías. Con Docker se puede implementar y ajustar la escala de aplicaciones de una forma rápida en cualquier entorno con la garantía de que el código se ejecutará. A primera vista se piensa en **Docker** como una especie de máquina virtual *liviana*, pero la verdad no lo es. En **Docker** no existe un hypervisor que virtualice hardware sobre el cual corra un sistema operativo completo. En Docker lo que se hace es usar las funcionalidades del Kernel para encapsular un sistema, de esta forma el proyecto que corre dentro de el no tendrá conocimiento que está en un contenedor. Los contenedores se encuentran aislados entre sí y se comportaran como máquinas independientes. Iniciar un contenedor no tiene un gran impacto a diferencia de iniciar una máquina virtual ya que no tiene que iniciar un sistema operativo completo(desde cero). Gracias al uso de contenedores la demanda de recursos baja.

## Enlaces
* [Documentación](https://docs.docker.com/)
* [Docker: The Fun and Easy Way](https://medium.com/myplanet-musings/docker-the-fun-and-easy-way-d84f5682c1f)
* [Dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

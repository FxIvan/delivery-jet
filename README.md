### Pagina
> Es una pagina de delivery que cuenta con tres unicos paquetes, por cada paquete se diferencia por el peso, zona de envio y cantidad de envios, cuenta con un Login y un carrito de compra, la unica seccion que no funciona por el momento es el link de hacer un envio.

### Funcionamiento de Carrito de Compra
> Cuando finalizamos la compra esta nos pide datos de la persona que adquiera el servicio, y nosotros como administrador lo vamos a poder
> ver en nuestra base de datos de Firebase como se muestra en el video
![ALT](https://github.com/FxIvan/delivery-jet/blob/firebase/src/GIF/carritodecompra.gif.gif?raw=true)

### Funcionamiento del Login
> Esto lo aprendi fuera del curso, use axio para verificar que el usuario y clave coincidan, use md5 para desencriptar la clave, cookie para almacenar y recuperar
> informacion y por ultimo levante un servidor con json-server
> 
#### json-server --watch dbUsuarios.json --port 3001 ####
> en caso de que queramos proobar instalamos las las librerias de axios, md5, cookie-universal y json-server
> si vamos a levantar el servidor debe ser por una consola exterior y no el de visual studio code

![ALT](https://github.com/FxIvan/delivery-jet/blob/firebase/src/GIF/ezgif.com-gif-maker.gif?raw=true)

### Libreria para Instalar para el login  ###
***npm install -g json-server***
***npm install axios md5 universal-cookie***


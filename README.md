
## Biblioteca de Imagenes `PIXABAY`

Aplicacion para buscar imagenes segun criterio o palabra desde la API de PIXABAY.

### `Librerias`

**Bootswatch**
Libreria de temas de estilos de `Bootstrap 4`.<br />
Link: [https://bootswatch.com/] <br />
Install: [https://github.com/thomaspark/bootswatch]<br />
CDN: [https://www.bootstrapcdn.com/bootswatch/]

### `API`

Se utilizo la `API` de la pagina de **PIXABAY**.<br />
Link: [https://pixabay.com/api/docs/].<br />
***`Este endpoint pide las imagenes segun la palabra y por cantidad que queramos`***
EndPoint: [http://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}].<br />

### `Paginador`

Se utilizo un paginador comun:<br />
1.- Se crearon dos `states` donde guardamos en uno la `pagina actual` (1) y en otro `total de paginas` (1)
2.- 

### `Funciones de JS utilizadas`

`Math.ceil(valor)` : Esta funcion redondea siempre hacia arriba.<br />
`Math.floor(valor)` : Esta funcion redondea siempre hacia abajo.<br />
`document.querySelector('.jumbotron').scrollIntoView({behavior: "smooth"})` :  se utiliza para direccionar el focus del DOM hacia el elemento seleccionado

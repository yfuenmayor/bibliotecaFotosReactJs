
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
1.- Se crearon dos `states` donde guardamos en uno la `pagina actual` (1) y en otro `total de paginas` (1).<br />
2.- Se crearon los dos botones:<br />
            //Boton <br />
            { (pagina === 1 || busqueda === '') ? null  : (<br />
                -button<br />
                  type="button"<br />
                  className="btn btn-sm btn-info mr-1"<br />
                  onClick={paginaAnterior}<br />
              -&laquo; Anterior -/button-<br />
            )}<br />
            // Cantidad de Paginas<br />
            { (pagina === 1 || pagina > totalpaginas) ? null : (<br />
              -button<br />
                  type="button"<br />
                  className="btn btn-sm btn-info mr-1"<br />
              -{pagina}-/button-<br />
            )}<br />
            // Boton Siguiente<br />
            { (pagina === totalpaginas || busqueda === '') ? null : (<br />
              -button<br />
                type="button"<br />
                className="btn btn-sm btn-info"<br />
                onClick={paginaSiguiente}<br />
              -Siguiente &raquo;-/button-<br />
            )}<br /><br />
3.- Se crearon las funciones para cambiar el numero de pagina<br />
    //Definir pagina Siguiente<br />
    const paginaSiguiente = () => {<br />
    `const paginaAnterior = () => {`<br />
        //Calculamos pagina actual<br />
        const nuevaPaginaActual = pagina + 1;<br />
        `const nuevaPaginaActual = pagina - 1;`<br />
        //Si la pagina es mayor al total de paginas retornamos<br />
        if(nuevaPaginaActual > totalpaginas) return;<br />
        `if(nuevaPaginaActual === 0) return;`<br />
        //Guardamos pagina Actual<br />
        setPagina(nuevaPaginaActual);<br />
    }<br /><br />
4.- Se agrego al **`useEffect`** la dependencia de **pagina** para que cuando cambie se ejecute la busqueda nueva<br />
         


### `Funciones de JS utilizadas`

`Math.ceil(valor)` : Esta funcion redondea siempre hacia arriba.<br />
`Math.floor(valor)` : Esta funcion redondea siempre hacia abajo.<br />
`document.querySelector('.jumbotron').scrollIntoView({behavior: "smooth"})` :  se utiliza para direccionar el focus del DOM hacia el elemento seleccionado

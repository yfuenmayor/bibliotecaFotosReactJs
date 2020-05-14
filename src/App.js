import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';


function App() {

  // STATES //
    //Palabra de busqueda
    const [busqueda, setBusqueda] = useState('');
    //Almacenando las imagenes de la busqueda
    const [imagenes, setImagenes] = useState([]);
    //Pagina Actual
    const [pagina, setPagina] = useState(1);
    //Total de paginas
    const [totalpaginas, setTotalpaginas] = useState(5);

  // Ejecutamos la consulta a la API
  useEffect(() => {
   
    const consultarApi = async () => {
       //Si la busqueda esta vacia no se ejecuta la consulta
        if (busqueda === '') return ;

        const imagenesPorPagina = 30;
        const key = '16518044-dfd6fa991268838b78ea7db85';
        const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${pagina}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        //Guardamos los resultados 
        setImagenes(resultado.hits);

        //Calculamos el total de paginas
        const totalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        setTotalpaginas(totalPaginas);

        //Ejecutamos un Scroll Hacia el inicio
        //Seleccionamos el jumbotron
        const jumbotron = document.querySelector('.jumbotron');
        //Ejecutamos la accion para que suba hacia el jumbotron
        jumbotron.scrollIntoView({behavior: "smooth"});


    }

    consultarApi();

  }, [busqueda,pagina]);

  //Reiniciamos la pagina al buscar
  useEffect (() =>{ setPagina(1); },[busqueda]);

  //Definir pagina Anterior
  const paginaAnterior = () => {
    //Calculamos pagina actual
    const nuevaPaginaActual = pagina - 1;
    //Si la pagina es menor a cero retornamos
    if(nuevaPaginaActual === 0) return;
    //Guardamos pagina Actual
    setPagina(nuevaPaginaActual);
  }

  //Definir pagina Siguiente
  const paginaSiguiente = () => {
    //Calculamos pagina actual
    const nuevaPaginaActual = pagina + 1;
    //Si la pagina es mayor al total de paginas retornamos
    if(nuevaPaginaActual > totalpaginas) return;
    //Guardamos pagina Actual
    setPagina(nuevaPaginaActual);
  }



  return (
      <div className="container">
        <div className="jumbotron mt-3">
          <h3 className="display-4 text-center mb-4">Buscador de Imagenes</h3>
          <Formulario 
            setBusqueda={setBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <ListadoImagenes 
            imagenes={imagenes}
          />

         <div className="mb-4">
            { (pagina === 1 || busqueda === '') ? null  : (
                <button
                  type="button"
                  className="btn btn-sm btn-info mr-1"
                  onClick={paginaAnterior}
              >&laquo; Anterior</button>
            )}

            { (pagina === 1 || pagina > totalpaginas) ? null : (
              <button
                  type="button"
                  className="btn btn-sm btn-info mr-1"
              >{pagina}</button>
            )}

            { (pagina === totalpaginas || busqueda === '') ? null : (
              <button
                type="button"
                className="btn btn-sm btn-info"
                onClick={paginaSiguiente}
              >Siguiente &raquo;</button>
            )}
         </div>
        </div>
      </div>
  );
}

export default App;

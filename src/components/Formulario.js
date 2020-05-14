import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error'


const Formulario = ({setBusqueda}) => {

    // STATES //
        //Cuardando lo escrito en el imput
        const [palabra, setPalabra] = useState('');
        // Para mostrar el error
        const [error, setError] = useState(false);

        const buscarImagenes = e => {
            e.preventDefault();

            // 1.- Validacion 
            if (palabra.trim() === '') {
                setError(true);
                return;
            }   

            // 2.-Accion al pasar validacion  
            setError(false);
            setBusqueda(palabra);

        }

    return (
        <form 
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-10">
                    <input 
                        type="text" 
                        className="form-control form-control-lg" 
                        name="" 
                        id=""
                        placeholder="Buscar una imagen, ejemplo: futbol o café"
                        onChange={ e => setPalabra(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-2">
                    <input 
                        type="submit" 
                        value="Buscar"
                        className="btn btn-primary btn-block btn-lg"
                    />
                </div>
            </div>
            { error ? <Error  mensaje="Agregar un termino de búsqueda" /> : null }
        </form>
    );
};

Formulario.propTypes = {
    setBusqueda: PropTypes.func.isRequired
};

export default Formulario;
import React from 'react';
import PropTypes from 'prop-types';
import Imagenes from './Imagenes';

const ListadoImagenes = ({imagenes}) => {
    return (
        <div className="row p-2 col-12">
            {imagenes.map( imagen => (
                <Imagenes 
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    );
};

ListadoImagenes.propTypes = {
    imagenes: PropTypes.array.isRequired
};

export default ListadoImagenes;
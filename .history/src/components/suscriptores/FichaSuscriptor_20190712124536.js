import React from 'react';

const FichaSuscriptor = ({alumno}) => {
    return ( 
        <div className="card my-3">
            <h3 className="card-header bg-primary text-white">Datos Solicitante</h3>

            <div className="card-body">
                <p className="font-weight-bold">Nombre: {' '}
                    <span className="font-weight-normal">{alumno.nombre}</span>
                </p>
            </div>
        </div>
     );
}
 
export default FichaSuscriptor;
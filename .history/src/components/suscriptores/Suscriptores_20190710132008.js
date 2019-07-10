import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Suscriptores = ({suscriptores}) => {

    if (!suscriptores) return <h1>Cargando...</h1>

    return ( 
        <dic className="row">
            <div className="col-md-12 mb-4">
                { /* TODO : MOSTRAR ENLACE PARA CREAR NUEVOS SUSCRIPTORES */}
            </div>
            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users"></i> Suscriptores
                </h2>
            </div>
            <div className="table table-stripped mt-4">
                <thead className="text-light bg-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
            </div>
        </dic>
     );
}
 
export default compose(
    firestoreConnect([{ collection: 'suscriptores' }]),
    connect((state, props) => ({
        suscriptores: state.firestore.ordered.suscriptores
    }))
) (Suscriptores);
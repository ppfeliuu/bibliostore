import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NuevoSuscriptor extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/suscriptores'} className="btn btn-secondary"><i className="fas fa-arrow-circle-left"></i>{' '} Volver a listado</Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user-plus"></i>{' '} Nuevo Suscriptor
                    </h2>
                </div>
            </div>
         );
    }
}
 
export default NuevoSuscriptor;
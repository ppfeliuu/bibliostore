import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NuevoLibro extends Component {
    state = { 
        titulo: '',
        ISBN: '',
        editorial: '',
        existencia: ''
     }
     
    render() { 
        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link
                        to="/"
                        className="btn btn-secondary"
                    >
                        <i className="fas fa-arrow-circle-left"></i>{' '}
                        Volver a listado
                    </Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i>{' '}
                        Nuevo Libro
                    </h2>
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form>
                                <div className="form-group">
                                    <label>Título:</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="titulo"
                                    placeholder="Título del libro"
                                    required
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NuevoLibro;
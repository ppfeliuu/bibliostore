import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class EditarLibro extends Component {
    state = {  }
    render() { 

        //obtener libro
        const { libro } = this.props;

        if (!libro) return <Spinner />


        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/'} className="btn btn-secondary"><i className="fas fa-arrow-circle-left"></i>{' '} Volver a listado</Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i>{' '} Editar Libro
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                        <form
                                onSubmit={this.agregarLibro}
                            >
                                <div className="form-group">
                                    <label>Título:</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="titulo"
                                    placeholder="Título del libro"
                                    required
                                    defaultValue={libro.titulo}
                                    onChange={this.leerDato}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Editorial:</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="editorial"
                                    placeholder="Editorial del libro"
                                    required
                                    defaultValue={libro.editorial}
                                    onChange={this.leerDato}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>ISBN:</label>
                                    <input type="text" 
                                    className="form-control"
                                    name="ISBN"
                                    placeholder="ISBN del libro"
                                    required
                                    defaultValue={libro.ISBN}
                                    onChange={this.leerDato}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Existencia:</label>
                                    <input type="number" 
                                    min="0"
                                    className="form-control"
                                    name="existencia"
                                    placeholder="Existencias del libro"
                                    required
                                    defaultValue={libro.existencia}
                                    onChange={this.leerDato}
                                    />
                                </div>

                                <input type="submit" value="Editar Libro" className="btn btn-success"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

         );
    }
}
 
EditarLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}

export default compose(
    firestoreConnect(props => [
        {
            collection : 'libros',
            storeAs : 'libro',
            doc : props.match.params.id
        }
    ]), 
    connect(({ firestore: { ordered }}, props ) => ({
        libro : ordered.libro && ordered.libro[0]
    }))
)(EditarLibro)
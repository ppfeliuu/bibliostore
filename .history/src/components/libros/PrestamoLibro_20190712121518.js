import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class PrestamoLibro extends Component {
    state = { 
        busqueda: ''
     }

    // Buscar alumno por código
    buscarAlumno = e => {
        e.preventDefault();

        // obtener el valor a buscar
        const { busqueda } = this.state;

        // extraer firestore
        const { firestore } = this.props;

        // hacer la consulta
        const coleccion = firestore.collection('suscriptores');
        const consulta = coleccion.where("codigo", "==", busqueda).get();

        // leer los resultados
        consulta.then(resultado => {
           if(resultado.empty) {

           } else {
               const datos = resultado.docs[0];
               console.log(datos.data);
           }
        })

    }


    // Almacenar el código en el state
    leerDato = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 

        const { libro } = this.props;

        if(!libro) return <Spinner />

        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/'} className="btn btn-secondary"><i className="fas fa-arrow-circle-left"></i>{' '} Volver a listado</Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-book"></i>{' '} Préstamo Libro: {libro.titulo}
                    </h2>     

                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8">
                                <form
                                    onSubmit={this.buscarAlumno}
                                >
                                    <legend className="color-primary text-center">
                                        Buscar suscriptor por código
                                    </legend>
                                    <div className="form-group">
                                        <input type="text"
                                            name="busqueda"
                                            className="form-control"
                                            onChange={this.leerDato}
                                        />
                                    </div>
                                    <input type="submit" className="btn btn-success btn-block" value="Buscar Alumno" />
                                </form>
                        </div>    
                    </div>               
                </div>
            </div>

         );
    }
}
 
PrestamoLibro.propTypes = {
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
)(PrestamoLibro)
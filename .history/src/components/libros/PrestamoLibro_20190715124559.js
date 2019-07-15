import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import FichaSuscriptor from '../suscriptores/FichaSuscriptor';

//REDUX ACTIONS
import { buscarUsuario } from '../../actions/buscarUsuariosActions';

class PrestamoLibro extends Component {
    state = { 
        noResultados: false,
        busqueda: ''      
     }

    // Buscar alumno por código
    buscarAlumno = e => {
        e.preventDefault();

        // obtener el valor a buscar
        const { busqueda } = this.state;

        // extraer firestore
        const { firestore, buscarUsuario } = this.props;

        // hacer la consulta
        const coleccion = firestore.collection('suscriptores');
        const consulta = coleccion.where("codigo", "==", busqueda).get();

        // leer los resultados
        consulta.then(resultado => {
           if(resultado.empty) {

                // almacena en redux un objeto vacio
                buscarUsuario({});
                this.setState({
                    noResultados: true                    
                })
           } else {

                // si hay resultado lo coloca en el state de Redux
               const datos = resultado.docs[0];
               buscarUsuario(datos.data())               

               // actualiza el state en base si hay resultaods
               this.setState({                   
                   noResultados: false
               })
           }
        })

    }

    // guarda los datos del solicitante del prestamo
    solicitarPrestamo = () => {
        const {usuario}  = this.props;
        
        // fecha de prestamo
        suscriptor.fechaSolicitud = new Date().toLocaleDateString();

        //Obtener libro
        const libroActualizado = this.props.libro;

        // agregar el suscriptor al libro
        libroActualizado.prestados.push( suscriptor );

        // obtener firestore y history the props

        const { firestore, history, libro } = this.props;

        firestore.update({
            collection: 'libros',
            doc: libro.id
        }, libroActualizado).then(history.push('/'));


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

        // extraer datos del alumno
        const { usuario } = this.props;

        let fichaAlumno, btnSolicitar;

        if(usuario.nombre) {
            fichaAlumno = <FichaSuscriptor alumno={usuario} />
            btnSolicitar = <button type="button" className="btn btn-primary btn-block" onClick={this.solicitarPrestamo}>Solicitar...</button>
        } else {
            fichaAlumno = null;
            btnSolicitar = null;
        }

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
                                    className="mb-4"
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

                                { /* Muestra ficha alumno y btn */}
                                {fichaAlumno}
                                {btnSolicitar}
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
    connect(({ firestore: { ordered }, usuario }, props ) => ({
        libro : ordered.libro && ordered.libro[0],
        usuario: usuario
    }), { buscarUsuario })
)(PrestamoLibro)
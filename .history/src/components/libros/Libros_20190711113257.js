import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Libros = ({libros}) => {

    if (!libros) return <Spinner />


    return ( 
        <div className="row">
            <div className="col-12 mb-4">
                <Link to="/libros/nuevo" className="btn btn-success">
                    <i className="fas fa-plus"></i>{' '}Nuevo Libro
                </Link>
            </div>
        </div>
    );
}


 
Libros.protoTypes = {
    firestore: PropTypes.object.isRequired,
    libros: PropTypes.array
}
 
export default compose(
    firestoreConnect([{ collection: 'libros' }]),
    connect((state, props) => ({
        libros: state.firestore.ordered.libros
    }))
) (Libros);
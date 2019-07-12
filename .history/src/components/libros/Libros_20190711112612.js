import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Libros = () => {
    return ( <h1>Libros</h1> );
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
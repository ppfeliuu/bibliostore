import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

class MostrarLibro extends Component {
    state = {  }
    render() { 
        return ( <h1>Mostrar Libro</h1> );
    }
}
 
MostrarLibro.propTypes = {
    firestore: PropTypes.object.isRequired
}
 
export default compose(
    firestoreConnect(props => [{
        collection: 'libross',
        storeAs: 'libro',
        doc: props.match.params.id
    }]),
    connect(({ firestore: {ordered}}, props) => ({
        libro: ordered.libro && ordered.libro[0]
    }))
)(MostrarLibro)
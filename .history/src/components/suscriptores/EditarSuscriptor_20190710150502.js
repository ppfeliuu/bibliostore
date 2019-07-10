import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';


class EditarSuscriptor extends Component {
    state = {  }
    render() { 
        return ( 
            <h1>Editar Suscriptor</h1>
         );
    }
}
 
export default compose(
    firestoreConnect(props => [{
        collection: 'suscriptores',
        storeAs: 'suscriptor',
        doc: props.match.params.id
    }]),
    connect(({ firestore: {ordered}}, props) => ({
        suscriptor: ordered.suscriptor && ordered.suscriptor[0]
    }))
)(EditarSuscriptor)
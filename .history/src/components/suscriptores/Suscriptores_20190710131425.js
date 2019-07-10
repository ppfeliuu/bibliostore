import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Suscriptores = (props) => {

    console.log(props.suscriptores);
    
    return ( 
        <h1>Suscriptores</h1>
     );
}
 
export default compose(
    firestoreConnect([{ collection: 'suscriptores' }]),
    connect((state, props) => ({
        suscriptores: state.firestore.ordered.suscriptores
    }))
) (Suscriptores);
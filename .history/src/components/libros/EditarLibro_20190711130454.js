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
                    <Link to={'/libros'} className="btn btn-secondary"><i className="fas fa-arrow-circle-left"></i>{' '} Volver a listado</Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user"></i>{' '} Editar Libro
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            
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
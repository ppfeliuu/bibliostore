import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';


class EditarSuscriptor extends Component {
    
    render() { 

        const { suscriptor } = this.props;

        if (!suscriptor) return <Spinner />
        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/suscriptores'} className="btn btn-secondary"><i className="fas fa-arrow-circle-left"></i>{' '} Volver a listado</Link>
                </div>
                <div className="col-12">
                    <h2>
                        <i className="fas fa-user"></i>{' '} Editar Suscriptor
                    </h2>

                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <form onSubmit={this.agregarSuscriptor}>
                                <div className="form-group">
                                    <label>Nombre:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="nombre"
                                        placeholder="Nombre del suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        dafaultValue={suscriptor.nombre}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Apellido:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="apellido"
                                        placeholder="Apellido del suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        dafaultValue={suscriptor.apellido}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Carrera:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="carrera"
                                        placeholder="Carrera del suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        dafaultValue={suscriptor.carrera}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Codigo:</label>
                                    <input type="text"
                                        className="form-control"
                                        name="codigo"
                                        placeholder="Código del suscriptor"
                                        required
                                        onChange={this.leerDato}
                                        dafaultValue={suscriptor.codigo}
                                    />
                                </div>
                                <input type="submit" value="Editar Suscriptor" className="btn btn-success"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
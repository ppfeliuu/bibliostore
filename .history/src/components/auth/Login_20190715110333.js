import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';

class Login extends Component {
    state = { 
        email: '',
        password: ''
     }

     // Inicia sesion en firebase
     iniciarSesion = e => {
         e.preventDefault();

         //extraer firebase
         const { firebase } = this.props;


         //extraer el state
         const { email, password } = this.state;

         // Auth el usuario
         firebase.login({
             email
             password
         })
         .then(resultado => console.log('Iniciaste session'))
     }

     // Almacena lo que el usuario escribe en el state
     leerDatos = e => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }


    render() { 
        return ( 
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h2 className="text-center py-4">
                                <i className="fas fa-lock"></i>{' '}
                                    Iniciar Sesión
                            </h2>

                            <form
                                onSubmit={this.iniciarSesion}
                            >
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="email"
                                        className="form-control"
                                        name="email"
                                        required
                                        value={this.state.email}
                                        onChange={this.leerDatos}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <input type="password"
                                        className="form-control"
                                        name="password"
                                        required
                                        value={this.state.password}
                                        onChange={this.leerDatos}
                                    />
                                </div>

                                <input type="submit"
                                    className="btn btn-success btn-block"
                                    value="Iniciar Sesión"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default firebaseConnect() (Login);
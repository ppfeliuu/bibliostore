import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux';

import Libros from './components/libros/Libros';
import MostrarLibros from './components/libros/MostrarLibro';
import NuevoLibro from './components/libros/NuevoLibro';
import EditarLibro from './components/libros/EditarLibro';
import PrestamoLibro from './components/libros/PrestamoLibro';


import Suscriptores from "./components/suscriptores/Suscriptores";
import MostrarSuscriptor from "./components/suscriptores/MostrarSuscriptor";
import EditarSuscriptor from "./components/suscriptores/EditarSuscriptor";
import NuevoSuscriptor from "./components/suscriptores/NuevoSuscriptor";

import Login from './components/auth/Login';
import Navbar from "./components/layout/Navbar";

import { UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';

function App() {
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={UserIsAuthenticated(Libros)} />
          <Route exact path="/libros/mostrar/:id" component={MostrarLibros} />
          <Route exact path="/libros/nuevo" component={NuevoLibro} />
          <Route exact path="/libros/editar/:id" component={EditarLibro} />
          <Route exact path="/libros/prestamo/:id" component={PrestamoLibro} />

          <Route exact path="/suscriptores" component={UserIsAuthenticated(Suscriptores)} />
          <Route exact path="/suscriptores/nuevo" component={NuevoSuscriptor} />
          <Route
            exact
            path="/suscriptores/mostrar/:id"
            component={MostrarSuscriptor}
          />
          <Route
            exact
            path="/suscriptores/editar/:id"
            component={EditarSuscriptor}
          />

          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;

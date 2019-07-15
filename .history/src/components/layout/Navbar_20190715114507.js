import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                <nav className="navbar navbar-light">
                    <span className="navbar-brand mb-0 h1">
                        Admin 
                    </span>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
    
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">               
                        <li className="nav-item">
                            <Link to={'/suscriptores'} className="nav-link">
                                Miembros
                            </Link>
                        </li>        
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link">
                                Libros
                            </Link>
                        </li>    
                    </ul>                
                </div>
            </nav>
         );
    }
}
 
export default Navbar;


import React, { Component } from 'react';

class NuevoSuscriptor extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="row">
                <div className="col-12 mb-4">
                    <Link to={'/suscriptores'} className="btn btn-secondary"></Link>
                </div>
            </div>
         );
    }
}
 
export default NuevoSuscriptor;
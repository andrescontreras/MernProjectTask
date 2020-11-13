import React from 'react';
import PropTypes from 'prop-types';

const Bar = props => {
    return (
        <header className="app-header">
            <p className="user-name"> Hola <span>Andres C</span></p>
            <nav className="principal-nav">
                <a href="#!">Cerrar Sesión</a>
            </nav>
        </header>
    );
};

Bar.propTypes = {
    
};

export default Bar;
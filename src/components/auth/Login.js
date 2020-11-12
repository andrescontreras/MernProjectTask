import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = props => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    const {email, password} = usuario;
    const onChange = (e) => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="user-form">
            <div className="content-form dark-shadow">
                <h1>Login</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="ingrese email"
                        onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="ingrese el password"
                        onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Iniciar Sesión"/>
                    </div>
                </form>
                <Link to={'/new-account'} className="account-link">Obtener cuenta</Link>
            </div>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const NewAccount = props => {
    const [usuario, guardarUsuario] = useState({
        name: '',
        email: '',
        password: '',
        retrypassword: ''
    });

    const {name,email, password, retrypassword} = usuario;
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
                <h1>Crea una cunenta</h1>
                <form onSubmit={onSubmit}>
                <div className="form-field">
                        <label htmlFor="name">Nombre</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="ingrese su nombre"
                        onChange={onChange}
                        />
                    </div>
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
                        <label htmlFor="retrypassword">Repetir Password</label>
                        <input
                        type="password"
                        id="retrypassword"
                        name="retrypassword"
                        value={retrypassword}
                        placeholder="repetor la contraseña"
                        onChange={onChange}
                        />
                    </div>
                    <div className="form-field">
                        <input type="submit" className="btn btn-primario btn-block"
                        value="Registrar"/>
                    </div>
                </form>
                <Link to={'/'} className="account-link">Iniciar Sesión</Link>
            </div>
        </div>
    );
};

NewAccount.propTypes = {
    
};

export default NewAccount;
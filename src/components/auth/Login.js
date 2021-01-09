import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { login, message, authenticated } = authContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push('projects');
    }

    if (message) {
      showAlert(message.message, message.category);
    }
  }, [message, authenticated, props.history]);

  const [usuario, guardarUsuario] = useState({
    email: '',
    password: '',
  });

  const { email, password } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      showAlert('All the fields are required', 'alert-error');
      return;
    }

    login({ email, password });
  };

  return (
    <div className="user-form">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.message}</div>
      ) : null}
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <Link to={'/new-account'} className="account-link">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;

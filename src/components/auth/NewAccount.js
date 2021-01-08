import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const NewAccount = (props) => {
  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  const authContext = useContext(AuthContext);
  const { registerUser, message, authenticated } = authContext;

  useEffect(() => {
    if (authenticated) {
      props.history.push('projects');
    }

    if (message) {
      showAlert(message.message, message.category);
    }
  }, [message, authenticated, props.history]);

  const [usuario, guardarUsuario] = useState({
    name: '',
    email: '',
    password: '',
    retrypassword: '',
  });

  const { name, email, password, retrypassword } = usuario;
  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      password.trim() === '' ||
      email.trim() === '' ||
      retrypassword.trim() === ''
    ) {
      showAlert('All the fields are required', 'alert-error');
      return;
    }

    if (password.length < 6) {
      showAlert('The password must be at least 6 characters', 'alert-error');
      return;
    }

    if (password !== retrypassword) {
      showAlert('The passwords must be equal', 'alert-error');
      return;
    }

    registerUser({ name, email, password });
  };

  return (
    <div className="user-form">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.message}</div>
      ) : null}
      <div className="content-form dark-shadow">
        <h1>Crea una cuenta</h1>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrar"
            />
          </div>
        </form>
        <Link to={'/'} className="account-link">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

NewAccount.propTypes = {};

export default NewAccount;

import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/authentication/authContext';

const Bar = (props) => {
  const authContext = useContext(AuthContext);
  const { getUserAuthenticated, user, logout } = authContext;

  useEffect(() => {
    getUserAuthenticated();
  }, []);

  const onClickLogout = () => {
    logout();
  };

  return (
    <header className="app-header">
      {user ? (
        <p className="user-name">
          Hola <span>{user.name}</span>
        </p>
      ) : null}

      <nav className="principal-nav">
        <button className="btn btn-blank logout" onClick={onClickLogout}>
          Cerrar Sesión
        </button>
      </nav>
    </header>
  );
};

Bar.propTypes = {};

export default Bar;

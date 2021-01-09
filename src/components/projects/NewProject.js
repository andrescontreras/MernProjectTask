import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';

const NewProject = (props) => {
  const projectsContext = useContext(projectContext);
  const { form, form_error, showForm, addProject, showError } = projectsContext;

  const [project, saveProject] = useState({
    name: '',
  });

  const { name } = project;

  const onChangeProject = (e) => {
    saveProject({
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
    if (name === '') {
      showError();
      return;
    }

    addProject(project);
    saveProject({
      nombre: '',
    });
  };

  const onClickForm = () => {
    showForm();
  };

  return (
    <Fragment>
      <button
        type="button"
        className=" btn btn-block btn-primario"
        onClick={onClickForm}
      >
        Nuevo proyecto
      </button>
      {form ? (
        <form className="new-project-form" onSubmit={onSubmitProject}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre proyecto"
            name="name"
            value={name}
            onChange={onChangeProject}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar proyecto"
          />
        </form>
      ) : null}
      {form_error ? (
        <p className="message error">El nombre es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

NewProject.propTypes = {};

export default NewProject;

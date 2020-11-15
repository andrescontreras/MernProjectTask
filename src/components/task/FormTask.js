import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';

const FormTask = props => {

    const projectsContext = useContext(projectContext);
    const { current_project } = projectsContext;

    if (!current_project) {
        return null
    }

    const [current_project_value] = current_project;

    return (
        <div className="form">
            <form>
                <div className="input-content">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"
                    />
                </div>
                <div className="input-content">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>

        </div>
    );
};

FormTask.propTypes = {

};

export default FormTask;
import React, { Fragment, useState  } from 'react';
import PropTypes from 'prop-types';

const NewProject = props => {

    const [project, saveProject] = useState({
        name: '',       
    });

    const {name} = project

    const onChangeProject = e =>{
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    const onSubmitProject = e => {
        e.preventDefault();
        
    }

    return (
        <Fragment>
            <button
                type="button"
                className=" btn btn-block btn-primario"
            >Nuevo proyecto</button>
            <form className="new-project-form"
                    onSubmit={onSubmitProject}>
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
        </Fragment>
    );
};

NewProject.propTypes = {

};

export default NewProject;
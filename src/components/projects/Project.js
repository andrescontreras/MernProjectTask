import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';


const Project = ({ project }) => {

    const projectsContext = useContext(projectContext);
    const { getCurrentProject } = projectsContext;

    const onClickProject = () => {
        getCurrentProject(project.id);
    }

    return (
        <li>
            <button type="button" className="btn btn-blank" onClick={onClickProject}>
                {project.name}
            </button>
        </li>
    );
};

Project.propTypes = {

};

export default Project;
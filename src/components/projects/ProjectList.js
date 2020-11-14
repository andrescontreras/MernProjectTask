
import Project from './Project';
import React, { Fragment, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';

const ProjectList = props => {

    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
    }, [])


    if (projects.lenght === 0) return null;

    return (
        <ul className="projects-list">
            {projects.map(project => (<Project key={project.id} project={project} />))}
        </ul>
    );
};

ProjectList.propTypes = {

};

export default ProjectList;
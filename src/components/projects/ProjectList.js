
import Project from './Project';
import React, { useContext, useEffect } from 'react';
import ropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';

const ProjectList = props => {

    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
    }, [])


    if (projects.length === 0) return (<p>No hay proyectos</p>);

    return (
        <ul className="projects-list">
            {projects.map(project => (<Project key={project.id} project={project} />))}
        </ul>
    );
};

ProjectList.propTypes = {

};

export default ProjectList;

import Project from './Project';
import React, { useContext, useEffect } from 'react';
import ropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const ProjectList = props => {

    const projectsContext = useContext(projectContext);
    const { projects, getProjects } = projectsContext;

    useEffect(() => {
        getProjects();
    }, [])


    if (projects.length === 0) return (<p>No hay proyectos</p>);

    return (
        <ul className="projects-list">
            <TransitionGroup>
                {projects.map(project => (<CSSTransition key={project.id} timeout={200} classNames="project"><Project project={project} /></CSSTransition>))}
            </TransitionGroup>
        </ul>
    );
};

ProjectList.propTypes = {

};

export default ProjectList;
import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const ProjectList = props => {

    const projects = [
        {ame: 'Nombre 1'
        },
        {
            name: 'Nombre 2'
        },
        {
            name: 'Nombre 3'
        },
        {
            name: 'Nombre 4'
        }
    ]

    return (
        <ul className="projects-list">
            {projects.map(project => (<Project project={project}/>))}
        </ul>
    );
};

ProjectList.propTypes = {
    
};

export default ProjectList;
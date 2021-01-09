import Project from './Project';
import React, { useContext, useEffect } from 'react';
import ropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from '../../context/alerts/alertContext';

const ProjectList = (props) => {
  const projectsContext = useContext(projectContext);
  const { message, projects, getProjects } = projectsContext;

  const alertContext = useContext(AlertContext);
  const { alert, showAlert } = alertContext;

  useEffect(() => {
    if (message) {
      showAlert(message.message, message.category);
    }
    getProjects();
  }, [message]);

  if (projects.length === 0) return <p>No hay proyectos</p>;

  return (
    <ul className="projects-list">
      {alert ? (
        <div className={`alert ${alert.category}`}>{alert.message}</div>
      ) : null}
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition key={project._id} timeout={200} classNames="project">
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

ProjectList.propTypes = {};

export default ProjectList;

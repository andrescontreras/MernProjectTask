import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';
import Task from './Task';

const TaskList = props => {

    const projectsContext = useContext(projectContext);
    const { current_project, deleteProject } = projectsContext;

    if (!current_project) {
        return <h2> Selecciona un proyecto</h2>
    }

    const [current_project_value] = current_project;

    const projectTasks = [
        { name: 'tarea1', state: true },
        { name: 'tarea2', state: true },
        { name: 'tarea3', state: true },
        { name: 'tarea4', state: true }
    ]

    const onClickDeteleProject = () => {
        deleteProject(current_project_value.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {current_project_value.name}</h2>
            <ul className="task-list">
                {projectTasks.length === 0
                    ? (<li className="task"> <p>Sin tareas</p></li>)
                    : (projectTasks.map(task => (
                        <Task key={Math.random()} task={task} />
                    )))

                }
                <button type="button" className="btn btn-primario" onClick={onClickDeteleProject}>
                    Eliminar Proyecto &times;
            </button>
            </ul>

        </Fragment>
    );
};

TaskList.propTypes = {

};

export default TaskList;
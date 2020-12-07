import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';
import Task from './Task';
import TaskContext from '../../context/task/TaskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const TaskList = props => {

    const projectsContext = useContext(projectContext);
    const { current_project, deleteProject } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { projectTasks } = tasksContext;


    if (!current_project) {
        return <h2> Selecciona un proyecto</h2>
    }

    const [current_project_value] = current_project;

    const onClickDeteleProject = () => {
        deleteProject(current_project_value.id);
    }

    return (
        <Fragment>
            <h2>Proyecto: {current_project_value.name}</h2>
            <ul className="task-list">
                {projectTasks.length === 0
                    ? (<li className="task"> <p>Sin tareas</p></li>)
                    : <TransitionGroup>
                        {(projectTasks.map(task => (
                            <CSSTransition key={task.id} timeout={200} classNames="task">
                                <Task key={task.id} task={task} />
                            </CSSTransition>
                        )))}
                    </TransitionGroup>

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
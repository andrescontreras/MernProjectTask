import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContext from '../../context/task/TaskContext';
import projectContext from '../../context/projects/projectContext';

const Task = ({ task }) => {

    const projectsContext = useContext(projectContext);
    const { current_project } = projectsContext;

    const [current_project_value] = current_project;

    const tasksContext = useContext(TaskContext);
    const { deleteTaskById, changeTaskStatus, getTasksByProject } = tasksContext;

    const onClickDelete = () => {
        console.log(task.id);
        deleteTaskById(task.id)
        getTasksByProject(current_project_value.id)
    }

    const onCLickChangeStatus = () => {
        if (task.state) {
            task.state = false;
        } else {
            task.state = true;
        }
        changeTaskStatus(task);
    }

    return (
        <li className="task shadow">
            <p>{task.name}</p>
            <div className="state">
                {task.state
                    ? (<button type="button" className="finished" onClick={onCLickChangeStatus}>Completo</button>)
                    : (<button type="button" className="not-finished" onClick={onCLickChangeStatus}>Incompleto</button>)
                }
            </div>
            <div className="actions">
                <button type="button" className="btn btn-primario">Editar</button>
                <button type="button" className="btn btn-secundario" onClick={onClickDelete}>Eliminar</button>
            </div>
        </li>
    );
};

Task.propTypes = {

};

export default Task;
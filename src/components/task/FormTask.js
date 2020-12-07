import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import projectContext from '../../context/projects/projectContext';
import TaskContext from '../../context/task/TaskContext';

const FormTask = props => {

    const projectsContext = useContext(projectContext);
    const { current_project } = projectsContext;

    const tasksContext = useContext(TaskContext);
    const { taskError, addTask, validateTask, getTasksByProject } = tasksContext;

    const [task, saveTask] = useState({
        name: ''
    })

    const { name } = task;


    if (!current_project) {
        return null
    }

    const [current_project_value] = current_project;

    const onSubmit = e => {
        e.preventDefault();
        if (name.trim() === '') {
            validateTask();
            return null;
        }

        task.projectId = current_project_value.id;
        task.state = false;
        addTask(task);
        getTasksByProject(current_project_value.id);
        saveTask({
            name: ''
        })


    }

    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <div className="input-content">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-content">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
            {taskError ? <p className="message error">Nombre de la tarea es obligatorio</p> : null}

        </div>
    );
};

FormTask.propTypes = {

};

export default FormTask;
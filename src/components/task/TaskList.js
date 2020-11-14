import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TaskList = props => {

    const projectTasks = [
        { name: 'tarea1', state: true },
        { name: 'tarea2', state: true },
        { name: 'tarea3', state: true },
        { name: 'tarea4', state: true }
    ]

    return (
        <Fragment>
            <h2>Proyecto: proyecto1</h2>
            <ul className="task-list">
                {projectTasks.length === 0
                    ? (<li className="task"> <p>Sin tareas</p></li>)
                    : (projectTasks.map(task => (
                        <Task key={Math.random()} task={task} />
                    )))

                }
                <button type="button" className="btn btn-primario">
                    Eliminar Proyecto &times;
            </button>
            </ul>

        </Fragment>
    );
};

TaskList.propTypes = {

};

export default TaskList;
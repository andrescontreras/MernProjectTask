import React, { useReducer } from 'react';
import { ADD_TASK, DELETE_TASK, PROJECT_TASKS, TASK_STATE, VALIDATE_TASK } from '../../types';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';

const TaskState = props => {
    const initialState = {
        tasks: [
            { id: 1, name: 'tarea1', state: true, projectId: 1 },
            { id: 2, name: 'tarea2', state: true, projectId: 1 },
            { id: 3, name: 'tarea3', state: true, projectId: 1 },
            { id: 4, name: 'tarea4', state: true, projectId: 2 },
            { id: 5, name: 'tarea5', state: true, projectId: 2 },
            { id: 6, name: 'tarea6', state: true, projectId: 3 },
            { id: 7, name: 'tarea7', state: true, projectId: 3 },
            { id: 8, name: 'tarea8', state: true, projectId: 3 },
            { id: 9, name: 'tarea9', state: true, projectId: 4 }
        ],
        projectTasks: null,
        taskError: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProject = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTaskById = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    const changeTaskStatus = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
            value={
                {
                    // State
                    tasks: state.tasks,
                    projectTasks: state.projectTasks,
                    taskError: state.taskError,
                    // Functions
                    getTasksByProject,
                    addTask,
                    validateTask,
                    deleteTaskById,
                    changeTaskStatus
                }
            }
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;

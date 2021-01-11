import React, { useReducer } from 'react';
import { ADD_TASK, CURRENT_TASK, DELETE_TASK, PROJECT_TASKS, TASK_STATE, VALIDATE_TASK, UPDATE_TASK } from '../../types';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import axiosClient from '../../config/axios';

const TaskState = props => {
    const initialState = {
        projectTasks: [],
        taskError: false,
        currentTask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getTasksByProject = async project => {
        console.log(project);

        try {
            const request = await axiosClient.get('/api/tasks', { params: { project } });
            console.log(request.data);
            dispatch({
                type: PROJECT_TASKS,
                payload: request.data.tasks
            })
        } catch (error) {
            console.log(error);
        }
    }

    const addTask = async task => {
        try {
            const request = await axiosClient.post('api/tasks', task);
            console.log(request.data);
            dispatch({
                type: ADD_TASK,
                payload: request.data
            })
        } catch (error) {
            console.log(error.data);
        }
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTaskById = async (id, project) => {

        try {
            const request = await axiosClient.delete(`/api/tasks/${id}`, { params: { project } });
            console.log(request);

            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async (task) => {
        console.log(task);

        try {
            const request = await axiosClient.put(`/api/tasks/${task._id}`, task);
            console.log(request);
            dispatch({
                type: UPDATE_TASK,
                payload: request.data.taskUpdated
            })

        } catch (error) {
            console.log(error);
        }
    }

    const saveCurrentTask = (task) => {
        dispatch({
            type: CURRENT_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
            value={
                {
                    // State
                    projectTasks: state.projectTasks,
                    taskError: state.taskError,
                    currentTask: state.currentTask,
                    // Functions
                    getTasksByProject,
                    addTask,
                    validateTask,
                    deleteTaskById,
                    saveCurrentTask,
                    updateTask
                }
            }
        >
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;

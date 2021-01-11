import { ADD_TASK, CURRENT_TASK, DELETE_TASK, PROJECT_TASKS, TASK_STATE, UPDATE_TASK, VALIDATE_TASK } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: action.payload
            }

        case ADD_TASK:
            return {
                ...state,
                projectTasks: [...state.projectTasks, action.payload],
                taskError: false
            }

        case VALIDATE_TASK:
            return {
                ...state,
                taskError: true
            }

        case DELETE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.filter(task => task._id !== action.payload)
            }
        case UPDATE_TASK:
        case TASK_STATE:
            return {
                ...state,
                projectTasks: state.projectTasks.map(task => task._id === action.payload._id ? action.payload : task),
                currentTask: null
            }

        case CURRENT_TASK:
            return {
                ...state,
                currentTask: action.payload
            }

        default:
            return null
    }
}
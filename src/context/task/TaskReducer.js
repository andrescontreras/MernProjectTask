import { ADD_TASK, CURRENT_TASK, DELETE_TASK, PROJECT_TASKS, TASK_STATE, UPDATE_TASK, VALIDATE_TASK } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter(task => task.projectId === action.payload)
            }

        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
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
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case UPDATE_TASK:
        case TASK_STATE:
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
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
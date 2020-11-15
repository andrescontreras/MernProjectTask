import { ADD_PROJECT, DELETE_PROJECT, FORM_PROJECT, FORM_VALIDATION, GET_CURRENT_PROJECT, GET_PROJECTS } from "../../types"
import { v4 as uuidv4 } from 'uuid';

const { useReducer } = require("react")
const { default: projectContext } = require("./projectContext")
const { default: projectReducer } = require("./projectReducer")


const ProjectState = props => {
    const projects = [
        { id: 1, name: 'Nombre 1' },
        { id: 2, name: 'Nombre 2' },
        { id: 3, name: 'Nombre 3' },
        { id: 4, name: 'Nombre 4' }]


    const initialState = {
        projects: [],
        form: false,
        form_error: false,
        current_project: null
    }

    const [state, dispatch] = useReducer(projectReducer, initialState)

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch(
            {
                type: GET_PROJECTS,
                payload: projects
            }
        )
    }

    const addProject = project => {
        project.id = uuidv4();
        dispatch(
            {
                type: ADD_PROJECT,
                payload: project
            }
        )
    }

    const showError = () => {
        dispatch(
            {
                type: FORM_VALIDATION,
            }
        )
    }

    const getCurrentProject = projectId => {
        dispatch(
            {
                type: GET_CURRENT_PROJECT,
                payload: projectId
            }
        )
    }

    const deleteProject = projectId => {
        dispatch(
            {
                type: DELETE_PROJECT,
                payload: projectId
            }
        )
    }

    return (
        <projectContext.Provider
            value={{
                // state
                projects: state.projects,
                form: state.form,
                form_error: state.form_error,
                current_project: state.current_project,
                // functions
                showForm,
                getProjects,
                addProject,
                showError,
                getCurrentProject,
                deleteProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;
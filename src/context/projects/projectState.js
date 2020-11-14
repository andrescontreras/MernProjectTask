import { FORM_PROJECT, GET_PROJECTS } from "../../types"

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
        form: false
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

    return (
        <projectContext.Provider
            value={{
                // state
                projects: state.projects,
                form: state.form,
                // functions
                showForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;
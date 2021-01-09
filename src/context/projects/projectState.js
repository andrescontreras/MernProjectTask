import {
  ADD_PROJECT,
  DELETE_PROJECT,
  FORM_PROJECT,
  FORM_VALIDATION,
  GET_CURRENT_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
} from '../../types';
import { v4 as uuidv4 } from 'uuid';
import axiosClient from '../../config/axios';

const { useReducer } = require('react');
const { default: projectContext } = require('./projectContext');
const { default: projectReducer } = require('./projectReducer');

const ProjectState = (props) => {
  //   const projects = [
  //     { id: 1, name: 'Nombre 1' },
  //     { id: 2, name: 'Nombre 2' },
  //     { id: 3, name: 'Nombre 3' },
  //     { id: 4, name: 'Nombre 4' },
  //   ];

  const initialState = {
    projects: [],
    form: false,
    form_error: false,
    current_project: null,
    message: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showForm = () => {
    dispatch({
      type: FORM_PROJECT,
    });
  };

  const getProjects = async () => {
    try {
      const request = await axiosClient.get('/api/projects');
      console.log(request);
      dispatch({
        type: GET_PROJECTS,
        payload: request.data.projects,
      });
    } catch (error) {
      console.log(error.data);
      const alert = {
        message: 'Error getting the projects',
        category: 'alert-error',
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  const addProject = async (project) => {
    // project.id = uuidv4();

    try {
      const request = await axiosClient.post('/api/projects', project);
      console.log(request);
      dispatch({
        type: ADD_PROJECT,
        payload: request.data,
      });
    } catch (error) {
      console.log(error.data);
      const alert = {
        message: 'Error adding project',
        category: 'alert-error',
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  const showError = () => {
    dispatch({
      type: FORM_VALIDATION,
    });
  };

  const getCurrentProject = (projectId) => {
    dispatch({
      type: GET_CURRENT_PROJECT,
      payload: projectId,
    });
  };

  const deleteProject = async (projectId) => {
    try {
      const request = await axiosClient.delete(`/api/projects/${projectId}`);
      console.log(request);
      dispatch({
        type: DELETE_PROJECT,
        payload: projectId,
      });
    } catch (error) {
      console.log(error.data);
      const alert = {
        message: 'Error deleting project',
        category: 'alert-error',
      };
      dispatch({
        type: PROJECT_ERROR,
        payload: alert,
      });
    }
  };

  return (
    <projectContext.Provider
      value={{
        // state
        projects: state.projects,
        form: state.form,
        form_error: state.form_error,
        current_project: state.current_project,
        message: state.message,
        // functions
        showForm,
        getProjects,
        addProject,
        showError,
        getCurrentProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;

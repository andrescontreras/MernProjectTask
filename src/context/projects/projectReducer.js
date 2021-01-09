import {
  ADD_PROJECT,
  DELETE_PROJECT,
  FORM_PROJECT,
  FORM_VALIDATION,
  GET_CURRENT_PROJECT,
  GET_PROJECTS,
  PROJECT_ERROR,
} from '../../types';

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT:
      return {
        ...state,
        form: true,
      };

    case GET_PROJECTS:
      console.log(action.payload);
      return {
        ...state,
        projects: action.payload,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        form_error: false,
      };

    case FORM_VALIDATION:
      return {
        ...state,
        form_error: true,
      };

    case GET_CURRENT_PROJECT:
      return {
        ...state,
        current_project: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };

    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        current_project: null,
      };

    case PROJECT_ERROR:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

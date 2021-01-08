import { HIDE_ALERT, SHOW_ALERT } from '../../types';

const { useReducer } = require('react');
const { default: alertContext } = require('./alertContext');
const { default: alertReducer } = require('./alertReducer');

const AlertState = (props) => {
  const initialState = {
    alert: null,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (message, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        category,
      },
    });

    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 5000);
  };

  return (
    <alertContext.Provider
      value={{
        // state
        alert: state.alert,
        // functions
        showAlert,
      }}
    >
      {props.children}
    </alertContext.Provider>
  );
};

export default AlertState;

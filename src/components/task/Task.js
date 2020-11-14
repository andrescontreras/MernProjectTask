import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task}) => {
    return (
       <li className="task shadow">
           <p>{task.name}</p>
           <div className="state">
                {task.state 
                    ? (<button type="button" className="finished">Completo</button>)
                    : (<button type="button" className="not-finished">Incompleto</button>)
                }
           </div>
           <div className="actions">
               <button type="button" className="btn btn-primario">Editar</button>
               <button type="button" className="btn btn-secundario">Eliminar</button>
           </div>
       </li>
    );
};

Task.propTypes = {
    
};

export default Task;
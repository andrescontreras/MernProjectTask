import React from 'react';
import PropTypes from 'prop-types';

const FormTask = props => {
    return (
        <div className="form">
            <form>
                <div className="input-content">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"
                    />
                </div>
                <div className="input-content">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
            
        </div>
    );
};

FormTask.propTypes = {
    
};

export default FormTask;
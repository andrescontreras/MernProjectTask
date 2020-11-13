import React from 'react';
import Sidebar from '../layout/Sidebar';
import Bar from '../layout/Bar';
import FormTask from '../task/FormTask';
import PropTypes from 'prop-types';
import TaskList from '../task/TaskList';

const Projects = props => {
    

    return (
        <div className="content-app">
            <Sidebar />
            <div className="principal-section">
                <Bar/>
                <main>
                    <FormTask/>
                    <div className="task-content">
                        <TaskList/>

                    </div>

                </main>
            </div>
        </div>
    );
};

Projects.propTypes = {

};

export default Projects;
import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';

const Sidebar = (props) => {
    
    

    return (
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <NewProject/>
            <div className="projects">
                <h2>Tus Proyectos</h2>
                <ProjectList/>
            </div>
            
        </aside>
        
    );
};

Sidebar.propTypes = {
    
};

export default Sidebar;
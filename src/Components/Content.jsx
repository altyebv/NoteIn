import React from 'react';
import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';    
import Projects from './Projects';
import Settings from './Setting';
import Notes from './Notes';


const Content = () => {
    const currentView = useSelector((state) => state.ui.currentView);
    switch (currentView) {
        case 'dashboard':
            return <Dashboard />;
        case 'projects':
            return <Projects />;
        case 'settings':
            return <Settings />;
        case 'notes':
            return <Notes />;    
        default:
            return <Dashboard />;
    }
};

export default Content;
import React from 'react';
import Projects from '../containers/projects';
import Details from '../containers/details';

const WebPage = () => (
    <div>
        <h2>Projects</h2>
        <Projects />
        <hr/>
        <h3>Details:</h3>
        <Details/>
    </div>
);

export default WebPage;
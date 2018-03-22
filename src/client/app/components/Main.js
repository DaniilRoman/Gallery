import React from 'react';
import Projects from '../containers/projects';
import { Switch, Route } from 'react-router-dom';
import ProjectsRouter from './ProjectsRouter';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Projects} />
            <Route path='/projects' component={ProjectsRouter} />
        </Switch>
    </div>
);

export default Main;
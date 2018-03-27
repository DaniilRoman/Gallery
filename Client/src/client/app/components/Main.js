import React from 'react';
import Projects from '../containers/projects';
import LoginPage from '../containers/login-page';
import { Switch, Route } from 'react-router-dom';
import ProjectsRouter from './ProjectsRouter';
import Register from '../containers/register-page';

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Projects} />
            <Route path='/projects' component={ProjectsRouter} />
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={Register}/>
        </Switch>
    </div>
);

export default Main;
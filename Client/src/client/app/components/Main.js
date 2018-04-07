import React from 'react';
import Projects from '../containers/projects';
import LoginPage from '../containers/login-page';
import { Switch, Route } from 'react-router-dom';
import ProjectsRouter from './ProjectsRouter';
import Register from '../containers/register-page';
import NoAuth from "./NoAuth";
import Login from "./Login";
import RegisterSuccessful from "./RegisterSuccessful";
import IncorectPassword from "./IncorectPassword";
import IncorectUsername from './IncorectUsername'

const Main = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Projects} />
            <Route path='/projects' component={ProjectsRouter} />
            <Route path='/login' component={LoginPage}/>
            <Route path='/register' component={Register}/>
            <Route path='/no_auth' component={NoAuth}/>
            <Route path='/login_successful' component={Login} />
            <Route path='/register_successful' component={RegisterSuccessful} />
            <Route path='/username_incorect' component={IncorectUsername} />
            <Route path='/password_incorect' component={IncorectPassword} />
        </Switch>
    </div>
);

export default Main;
import React from 'react';
import Projects from '../containers/projects';
import Details from '../containers/details';
import { Switch, Route } from 'react-router-dom';

const WebPage = () => (
    <div>
        <Switch>
            <Route exact path='/' component={Projects} />
            <Route path='/project/:id' component={Details} />
        </Switch>
        {/* <Projects/>
        <Details/> */}
    </div>
);

export default WebPage;
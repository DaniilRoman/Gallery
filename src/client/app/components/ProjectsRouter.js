import React from 'react';
import Projects from '../containers/projects';
import Details from '../containers/projectDetails';
import { Switch, Route } from 'react-router-dom';

const ProjectsRouter = () => (
    <Switch>
      <Route exact path='/projects' component={Projects}/>
      <Route path='/projects/:id' component={Details}/>
    </Switch>
  )
export default ProjectsRouter;
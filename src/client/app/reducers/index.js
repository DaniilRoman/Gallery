import { combineReducers } from 'redux';
import ActiveProject from './project-active';
import ConnectToAPI from './connectToAPI';
import ChangeProjects from './projects'


const allReducers = combineReducers({
    projects: ChangeProjects,
    active: ActiveProject,
    BehanceAPI: ConnectToAPI

});

export default allReducers
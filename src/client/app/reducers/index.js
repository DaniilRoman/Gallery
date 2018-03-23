import { combineReducers } from 'redux';
import ActiveProject from './project-active';
import ConnectToAPI from './connect-to-api';
import ChangeProjects from './projects';
import ChangeQueryForSearch from './change-query-for-search';

const allReducers = combineReducers({
    projects: ChangeProjects,
    active: ActiveProject,
    BehanceAPI: ConnectToAPI,
    queryForSearch: ChangeQueryForSearch

});

export default allReducers
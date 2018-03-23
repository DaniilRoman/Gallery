import { combineReducers } from 'redux';
import ActiveProject from './project-active';
import ConnectToAPI from './connect-to-api';
import ChangeProjects from './projects';
import activePage from './page-active';
import ChangeQueryForSearch from './change-query-for-search';

const allReducers = combineReducers({
    projects: ChangeProjects,
    active: ActiveProject,
    BehanceAPI: ConnectToAPI,
    queryForSearch: ChangeQueryForSearch,
    activePage: activePage

});

export default allReducers
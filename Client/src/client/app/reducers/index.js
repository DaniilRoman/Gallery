import { combineReducers } from 'redux';
import ActiveProject from './project-active';
import ConnectToAPI from './connect-to-api';
import ChangeProjects from './projects';
import activePage from './page-active';
import ChangeQueryForSearch from './change-query-for-search';
import navLinks from "./active-nav-link";
import registerPage from './change-register-page';
import loginPage from "./change-login-page";
import changeFlag from './change-flag';
import changeImagesIndex from './images-index';
import changeCountImages from './change-count-images';
import changeImageArray from './change-image-array';

const allReducers = combineReducers({
    projects: ChangeProjects,
    active: ActiveProject,
    BehanceAPI: ConnectToAPI,
    queryForSearch: ChangeQueryForSearch,
    activePage: activePage,
    navLinks: navLinks,
    registerPage: registerPage,
    loginPage:loginPage,
    flag: changeFlag,
    index: changeImagesIndex,
    count: changeCountImages,
    imageArray: changeImageArray

});

export default allReducers
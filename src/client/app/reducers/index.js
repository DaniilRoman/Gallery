import { combineReducers } from 'redux';
import Projects from './car';
import ActiveCar from './car-active';
import ConnectToAPI from './connectToAPI';
import ChangeProjects from './projects'


const allReducers = combineReducers({
    cars: ChangeProjects,
    active: ActiveCar,
    BehanceAPI: ConnectToAPI

});

export default allReducers
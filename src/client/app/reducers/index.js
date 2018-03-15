import { combineReducers } from 'redux';
import Projects from './car';
import ActiveCar from './car-active';
import ConnectToAPI from './connectToAPI';

const allReducers = combineReducers({
    cars: Projects,
    active: ActiveCar,
    BehanceAPI: ConnectToAPI
});

export default allReducers
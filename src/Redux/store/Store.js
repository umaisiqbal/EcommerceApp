import {createStore} from 'redux';
import reducers from '../reducers/Reducers';
import { combineReducers } from 'redux';
import reducers2 from '../reducers/Reducers2';
const routeReducer=combineReducers({reducers,reducers2})
const store=createStore(routeReducer)
export default store
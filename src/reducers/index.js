import { combineReducers } from "redux";
import Auths from  './Auths'
import ROOMS from './Rooms'

const rootReducer = combineReducers({Auths, ROOMS});

export default rootReducer;
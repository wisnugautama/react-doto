import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import teams from '../reducers/team';
import players from '../reducers/player';

// buat bungkus semua reducer
const rootReducer = combineReducers({
    teams,
    players
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store




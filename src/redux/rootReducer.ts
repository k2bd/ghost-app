import { combineReducers } from 'redux';
import gamesSlice from './games/reducers';

const rootReducer = combineReducers({
    games: gamesSlice.reducer,
});

export default rootReducer;

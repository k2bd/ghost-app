import { combineReducers } from 'redux';
import gamesSlice from './games/reducers';
import playerReducer from './player/reducers';

const rootReducer = combineReducers({
    games: gamesSlice.reducer,
    player: playerReducer,
});

export default rootReducer;

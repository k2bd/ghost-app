import { combineReducers } from 'redux';
import gamesSlice from './games/reducers';
import playerReducer from './player/reducers';

const rootReducer = combineReducers({
    game: gamesSlice.reducer,
    player: playerReducer.reducer,
});

export default rootReducer;

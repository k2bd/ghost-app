import { createReducer } from '@reduxjs/toolkit';
import { setPlayerName } from './actions';

const playerReducer = createReducer({ localPlayer: null as Player | null }, (builder) =>
    builder.addCase(setPlayerName, (state, action) => {
        state.localPlayer = { name: action.payload };
    }),
);

export default playerReducer;

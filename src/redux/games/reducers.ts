import { createSlice } from '@reduxjs/toolkit';
import { createGame, fetchGameByRoomCode } from './actions';

type GameLoadStatus = 'idle' | 'loading' | 'gameDoesNotExist' | 'creatingGame' | 'error';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        game: null as Game | null,
        gameLoadStatus: 'idle' as GameLoadStatus,
        joined: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGameByRoomCode.pending, (state, action) => {
            state.game = null;
            state.gameLoadStatus = 'loading';
        });
        builder.addCase(fetchGameByRoomCode.fulfilled, (state, action) => {
            state.game = action.payload;
            state.gameLoadStatus = 'idle';
        });
        builder.addCase(fetchGameByRoomCode.rejected, (state, action) => {
            state.game = null;
            state.gameLoadStatus = 'error';
            if (action.payload) {
                if (action.payload.statusCode == 404) {
                    state.gameLoadStatus = 'gameDoesNotExist';
                }
            }
        });
        builder.addCase(createGame.pending, (state, action) => {
            state.game = null;
            state.gameLoadStatus = 'loading';
        });
        builder.addCase(createGame.fulfilled, (state, action) => {
            state.game = action.payload;
            state.gameLoadStatus = 'idle';
        });
        builder.addCase(createGame.rejected, (state, action) => {
            state.game = null;
            state.gameLoadStatus = 'error';
        });
    },
});

export default gamesSlice;

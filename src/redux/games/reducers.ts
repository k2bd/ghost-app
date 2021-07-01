import { createSlice } from '@reduxjs/toolkit';
import {
    createGame,
    fetchGameByRoomCode,
    joinGame,
    makeChallenge,
    makeChallengeResponse,
    makeChallengeVote,
    makeMove,
} from './actions';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        game: null as Game | null,
        gameLoadStatus: 'idle' as GameLoadStatus,
        joined: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGameByRoomCode.pending, (state) => {
            state.gameLoadStatus = 'loading';
        });
        builder.addCase(fetchGameByRoomCode.fulfilled, (state, action) => {
            state.game = action.payload;
            state.gameLoadStatus = 'idle';
        });
        builder.addCase(fetchGameByRoomCode.rejected, (state, action) => {
            state.game = null;
            //state.gameLoadStatus = 'error';
            state.gameLoadStatus = 'gameDoesNotExist'; // TEMP
            if (action.payload) {
                if (action.payload.statusCode == 404) {
                    state.gameLoadStatus = 'gameDoesNotExist';
                }
            }
        });
        builder.addCase(createGame.pending, (state) => {
            state.game = null;
            state.gameLoadStatus = 'loading';
        });
        builder.addCase(createGame.fulfilled, (state, action) => {
            state.game = action.payload;
            state.gameLoadStatus = 'idle';
        });
        builder.addCase(createGame.rejected, (state) => {
            state.game = null;
            state.gameLoadStatus = 'error';
        });
        builder.addCase(joinGame.pending, (state) => {
            state.gameLoadStatus = 'joining';
            state.joined = false;
        });
        builder.addCase(joinGame.fulfilled, (state, action) => {
            state.gameLoadStatus = 'idle';
            state.joined = true;
            state.game = action.payload;
        });
        builder.addCase(joinGame.rejected, (state) => {
            state.gameLoadStatus = 'error';
            state.joined = false;
        });
        builder.addCase(makeMove.pending, () => {
            // TODO
        });
        builder.addCase(makeMove.fulfilled, (state, action) => {
            state.game = action.payload;
        });
        builder.addCase(makeChallenge.fulfilled, (state, action) => {
            state.game = action.payload;
        });
        builder.addCase(makeChallengeResponse.fulfilled, (state, action) => {
            state.game = action.payload;
        });
        builder.addCase(makeChallengeVote.fulfilled, (state, action) => {
            state.game = action.payload;
        });
    },
});

export default gamesSlice;
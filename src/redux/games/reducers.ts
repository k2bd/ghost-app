import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';
import {
    createGame,
    fetchGameByRoomCode,
    joinGame,
    makeChallenge,
    makeChallengeResponse,
    makeChallengeVote,
    makeMove,
    reloadGame,
    resetPolling,
    startGame,
} from './actions';

const INITIAL_STATE = {
    game: null as Game | null,
    gameLoadStatus: 'idle' as GameLoadStatus,
    joined: false,
    joinedRoomCode: null as string | null,
    latestAction: moment(),
};
export type GamesSliceState = typeof INITIAL_STATE;

const gamesSlice = createSlice({
    name: 'games',
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(reloadGame, (state) => {
            state.game = INITIAL_STATE.game;
            state.gameLoadStatus = INITIAL_STATE.gameLoadStatus;
            state.joined = INITIAL_STATE.joined;
            state.joinedRoomCode = INITIAL_STATE.joinedRoomCode;
            state.latestAction = moment();
        });
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
            state.latestAction = moment();
        });
        builder.addCase(createGame.fulfilled, (state, action) => {
            state.game = action.payload;
            state.gameLoadStatus = 'idle';
        });
        builder.addCase(createGame.rejected, (state) => {
            state.game = null;
            state.gameLoadStatus = 'error';
        });
        builder.addCase(startGame.fulfilled, (state, action) => {
            state.game = action.payload;
            state.latestAction = moment();
        });
        builder.addCase(joinGame.pending, (state) => {
            state.gameLoadStatus = 'joining';
            state.joined = false;
            state.joinedRoomCode = null;
            state.latestAction = moment();
        });
        builder.addCase(joinGame.fulfilled, (state, action) => {
            state.gameLoadStatus = 'idle';
            state.joined = true;
            state.game = action.payload;
            state.joinedRoomCode = action.payload.roomCode;
        });
        builder.addCase(joinGame.rejected, (state) => {
            state.gameLoadStatus = 'error';
            state.joined = false;
            state.joinedRoomCode = null;
        });
        builder.addCase(makeMove.pending, (state) => {
            state.latestAction = moment();
            // TODO
        });
        builder.addCase(makeMove.fulfilled, (state, action) => {
            state.game = action.payload;
        });
        builder.addCase(makeChallenge.fulfilled, (state, action) => {
            state.game = action.payload;
            state.latestAction = moment();
        });
        builder.addCase(makeChallengeResponse.fulfilled, (state, action) => {
            state.game = action.payload;
            state.latestAction = moment();
        });
        builder.addCase(makeChallengeVote.fulfilled, (state, action) => {
            state.game = action.payload;
            state.latestAction = moment();
        });
        builder.addCase(resetPolling, (state) => {
            state.latestAction = moment();
        });
    },
});

export default gamesSlice;

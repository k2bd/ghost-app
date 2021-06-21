import { createAsyncThunk } from '@reduxjs/toolkit';
import ghostApi from '../api';

interface Error {
    statusCode: number;
}

export const fetchGameByRoomCode = createAsyncThunk<Game, string, { rejectValue: Error }>(
    'games/fetchGameByRoomCode',
    async (roomCode) => {
        const response = await ghostApi.get(`/game/${roomCode}`);
        return response.data as Game;
    },
);

export const createGame = createAsyncThunk<Game, string>('games/createGame', async (roomCode) => {
    const response = await ghostApi.post(`/game/${roomCode}`);
    return response.data as Game;
});

export const joinGame = createAsyncThunk<Game, { roomCode: string; player: Player }, { rejectValue: Error }>(
    'games/joinGame',
    async ({ roomCode, player }, thunkApi) => {
        const response = await ghostApi.post(`/game/${roomCode}/player`, player);
        if (response.status === 404) {
            return thunkApi.rejectWithValue({ statusCode: 404 });
        }
        return response.data as Game;
    },
);

export const makeMove = createAsyncThunk<Game, { roomCode: string; move: Move }>(
    'games/makeMove',
    async ({ roomCode, move }, thunkApi) => {
        const response = await ghostApi.post(`/game/${roomCode}/move`, move);
        if (response.status !== 200) {
            return thunkApi.rejectWithValue({ statusCode: response.status });
        }
        return response.data as Game;
    },
);

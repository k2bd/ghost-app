import { createAsyncThunk } from '@reduxjs/toolkit';
import ghostApi from '../api';

interface Error {
    statusCode: number;
}

export const fetchGameByRoomCode = createAsyncThunk<Game, string, { rejectValue: Error }>(
    'games/fetchGameByRoomCode',
    async (roomCode, thunkApi) => {
        const response = await ghostApi.get('/game/', { params: { roomCode: roomCode } });
        if (response.status == 404) {
            return thunkApi.rejectWithValue({ statusCode: 404 });
        }
        return response.data as Game;
    },
);

export const createGame = createAsyncThunk<Game, string>('games/createGame', async (roomCode) => {
    const response = await ghostApi.post('/game/', { params: { roomCode: roomCode } });
    return response.data as Game;
});

export const joinGame = createAsyncThunk<Game, { roomCode: string; player: Player }, { rejectValue: Error }>(
    'games/joinGame',
    async ({ roomCode, player }, thunkApi) => {
        const response = await ghostApi.post(`/game/${roomCode}/player`, { ...player });
        if (response.status == 404) {
            return thunkApi.rejectWithValue({ statusCode: 404 });
        }
        return response.data as Game;
    },
);

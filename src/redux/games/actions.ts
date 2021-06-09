import { createAsyncThunk } from '@reduxjs/toolkit';
import ghostApi from '../api';

interface GetGameError {
    statusCode: number;
}

export const fetchGameByRoomCode = createAsyncThunk<Game, string, { rejectValue: GetGameError }>(
    'games/fetchGameByRoomCode',
    async (roomCode, thunkApi) => {
        const response = await ghostApi.get('/game/', { params: { roomCode: roomCode } });
        if (response.status == 404) {
            return thunkApi.rejectWithValue({ statusCode: 404 });
        }
        return response.data as Game;
    },
);

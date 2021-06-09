import { createSlice } from '@reduxjs/toolkit';
import { fetchGameByRoomCode } from './actions';

const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        game: null as Game | null,
        loading: false,
        gameDoesNotExist: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGameByRoomCode.pending, (state, action) => {
            state.game = null;
            state.loading = true;
            state.gameDoesNotExist = false;
        });
        builder.addCase(fetchGameByRoomCode.fulfilled, (state, action) => {
            state.game = action.payload;
            state.loading = false;
            state.gameDoesNotExist = false;
        });
        builder.addCase(fetchGameByRoomCode.rejected, (state, action) => {
            state.loading = false;
            if (action.payload) {
                if (action.payload.statusCode == 404) {
                    state.game = null;
                    state.loading = true;
                    state.gameDoesNotExist = true;
                }
            } else {
                // Unknown error type
                throw action.error;
            }
        });
    },
});

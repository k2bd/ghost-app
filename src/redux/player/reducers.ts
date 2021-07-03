import { createSlice } from '@reduxjs/toolkit';
import { loginGuest, logOut } from './actions';

const playerSlice = createSlice({
    name: 'player',
    initialState: {
        localPlayer: null as Player | null,
        loginStatus: 'notLoggedIn' as LoginStatus,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logOut, (state) => {
            state.localPlayer = null;
            state.loginStatus = 'notLoggedIn';
        });
        builder.addCase(loginGuest.pending, (state) => {
            state.loginStatus = 'loggingIn';
        });
        builder.addCase(loginGuest.rejected, (state) => {
            state.loginStatus = 'notLoggedIn';
        });
        builder.addCase(loginGuest.fulfilled, (state, action) => {
            state.localPlayer = action.payload;
            state.loginStatus = 'loggedIn';
        });
    },
});

export default playerSlice;

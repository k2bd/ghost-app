import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import ghostApi from '../api';

export const logOut = createAction('player/logOut');

export const loginGuest = createAsyncThunk<Player, GuestLogin>('player/loginGuest', async (guestInfo: GuestLogin) => {
    const response = await ghostApi.post(`/login/guest`, guestInfo);
    return response.data as Player;
});

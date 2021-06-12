import { createAction } from '@reduxjs/toolkit';

export const setPlayerName = createAction<string, 'setPlayerName'>('setPlayerName');

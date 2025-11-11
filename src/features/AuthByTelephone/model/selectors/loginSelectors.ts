import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginTelephone = (state: StateSchema) =>
    state?.loginForm?.telephone || '';

export const getLoginCode = createSelector(
    (state: StateSchema) => state.loginForm?.code,
    (code) => code || ['', '', '', ''],
);

export const getLoginIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
export const getLoginError = (state: StateSchema) => state?.loginForm?.error;

import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginTelephone = (state: StateSchema) =>
    state?.loginForm?.telephone || '';
export const getLoginCode = (state: StateSchema) =>
    state?.loginForm?.code || undefined;

export const getLoginIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
export const getLoginError = (state: StateSchema) => state?.loginForm?.error;

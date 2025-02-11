import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';
import { verifyCode } from '../services/verifyCode/verifyCode';
import { sendCode } from '../services/sendCode/sendCode';

const initialState: LoginSchema = {
    telephone: undefined,
    code: undefined,
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setTelephone: (state, action: PayloadAction<string>) => {
            state.telephone = action.payload;
        },
        setCode: (state, action: PayloadAction<number>) => {
            state.code = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendCode.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(sendCode.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(sendCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(verifyCode.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(verifyCode.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(verifyCode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;

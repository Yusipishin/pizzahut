import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '@/entities/User';

interface SendCodeProps {
    telephone: number;
}

export const sendCode = createAsyncThunk<
    User,
    SendCodeProps,
    ThunkConfig<string>
>('login/sendCode', async (authData, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    try {
        const response = await extra.api.post<User>('/send-code', authData);

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
});

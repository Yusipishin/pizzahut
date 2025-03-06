import { FC, lazy } from 'react';
import { LoginPhoneProps } from './LoginPhone';

export const LoginPhoneAsync = lazy<FC<LoginPhoneProps>>(
    () => import('./LoginPhone'),
);

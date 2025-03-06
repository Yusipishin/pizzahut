import { FC, lazy } from 'react';
import { LoginCodeProps } from './LoginCode';

export const LoginCodeAsync = lazy<FC<LoginCodeProps>>(
    () => import('./LoginCode'),
);

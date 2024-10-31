import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getUserAuthData,
    getUserInited,
    getUserRoles,
    isUserAdmin,
} from './userSelectors';
import { UserRole } from '../consts/userConsts';

describe('entities/User/userSelectors.test', () => {
    test('Return user auth data', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                },
            },
        };
        expect(getUserAuthData(state as StateSchema)).toEqual({ id: '1' });
    });

    test('Return user inited', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                _inited: true,
            },
        };
        expect(getUserInited(state as StateSchema)).toEqual(true);
    });

    test('Return user roles', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    roles: [UserRole.ADMIN, UserRole.USER],
                },
            },
        };
        expect(getUserRoles(state as StateSchema)).toEqual([
            UserRole.ADMIN,
            UserRole.USER,
        ]);
    });

    test('Return true for admin role', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    roles: [UserRole.ADMIN],
                },
            },
        };
        expect(isUserAdmin(state as StateSchema)).toBe(true);
    });

    test('Return false when user is not an admin', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    roles: [UserRole.USER],
                },
            },
        };
        expect(isUserAdmin(state as StateSchema)).toBe(false);
    });

    test('Return false when authData is undefined', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: undefined,
            },
        };
        expect(isUserAdmin(state as StateSchema)).toBe(false);
    });
});

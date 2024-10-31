import { User, UserSchema } from '../types/user';
import { userActions, userReducer } from './userSlice';

const userAuthData: User = {
    id: '1',
    roles: [],
    username: 'user',
};

describe('entities/User/userSlice.test', () => {
    test('Set auth data', () => {
        const state: UserSchema = { _inited: true, authData: undefined };
        expect(
            userReducer(state, userActions.setAuthData(userAuthData)),
        ).toEqual({
            _inited: true,
            authData: userAuthData,
        });
    });

    test('Set auth data with an empty user object', () => {
        const state: UserSchema = { _inited: true };
        const emptyUser: User = { id: '', roles: [], username: '' };
        expect(userReducer(state, userActions.setAuthData(emptyUser))).toEqual({
            _inited: true,
            authData: emptyUser,
        });
    });

    test('Init auth data', () => {
        const state: UserSchema = { _inited: false };
        expect(userReducer(state, userActions.initAuthData())).toEqual({
            _inited: true,
        });
    });

    test('Init auth data when already initialized', () => {
        const state: UserSchema = { _inited: true };
        expect(userReducer(state, userActions.initAuthData())).toEqual({
            _inited: true,
        });
    });

    test('Logout', () => {
        const state: UserSchema = { _inited: true, authData: userAuthData };
        expect(userReducer(state, userActions.logout())).toEqual({
            _inited: true,
            authData: undefined,
        });
    });

    test('Logout when no auth data exists', () => {
        const state: UserSchema = { _inited: true, authData: undefined };
        expect(userReducer(state, userActions.logout())).toEqual({
            _inited: true,
            authData: undefined,
        });
    });
});

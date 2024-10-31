export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/userConsts';
export {
    getUserAuthData,
    getUserInited,
    getUserRoles,
    isUserAdmin,
} from './model/selectors/userSelectors';

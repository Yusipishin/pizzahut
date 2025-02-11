import { UserRole } from '../consts/userConsts';

export interface User {
    id: string;
    telephone?: string;
    roles: UserRole[];
    firstname?: string;
    email?: string;
    address?: string;
    birthday?: string;
    city?: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}

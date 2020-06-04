/*
Credit to Jason Watmore (https://github.com/cornflourblue) for Angular Registration and Login example.
Source: https://github.com/cornflourblue/angular-8-registration-login-example
*/

import { Role } from '.';

export interface User {
    id: string;
    username: string;
    password: string;
    role: Role;
    firstName: string;
    lastName: string;
    token?: string;
    enabled: boolean;
    email: string;
    expirationDate?: Date;
    createdDate?: Date;
}

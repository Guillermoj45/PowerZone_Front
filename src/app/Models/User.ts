import {Profile} from "./Profile";

export class User {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    profile?: Profile;
    followers?: User[];
    following?: User[];
}

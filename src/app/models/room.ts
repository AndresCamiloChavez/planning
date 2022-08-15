import { User } from './user';
export interface Room{
    code: string;
    users: User[];
}
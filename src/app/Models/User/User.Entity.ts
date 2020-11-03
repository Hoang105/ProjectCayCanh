import { RoleEntity } from './Role.Entity';

export class UserEntity {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    role: RoleEntity;
    token?: string;
}
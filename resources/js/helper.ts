
import { TUser } from "./types";

export function can(user: TUser, permission: string): boolean {
    return user.permissions.includes(permission);
}

export function hasRole(user:TUser,role:string):boolean{
    return user.roles.includes(role)
}


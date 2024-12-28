
import { TUser } from "./types";

export function can(user: TUser, permission: string): boolean {
    return user.permission.includes(permission);
}

export function hasRole(user:TUser,role:string):boolean{
    return user.role.includes(role)
}


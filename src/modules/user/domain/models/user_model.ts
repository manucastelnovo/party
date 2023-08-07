export interface User {
    id:number,
    userName:string,
    password:string,
};
export interface CreateUser extends Omit<User, ""> {};
export interface UpdateUser extends Partial<User> {}
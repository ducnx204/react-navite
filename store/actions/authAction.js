import User from "../../models/User"

export const LOGIN = 'LOGIN'
export const REGISTER = 'REGISTER'

export const login = (email, password) => {
    return { type: LOGIN, user: new User(email, password) };
};
export const register = (email, password) => {
    return { type: REGISTER, user: new User(email, password) };
};
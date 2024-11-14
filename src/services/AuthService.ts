import $api from "../http";
import { AxiosResponse } from "axios";
import TUser from "../types/TUser";

export default class AuthService {

    static async loginUserAuth(login: string, password: string): Promise<AxiosResponse<{user: TUser} & {token: string}>> {
        return $api.post('/login', {login, password})
    }

    static async registerUserAuth(email: string, login: string, password: string): Promise<AxiosResponse<{user: TUser}>> {
        return $api.post('/register', {login, email, password})
    }

    static async logoutUserAuth(): Promise<void> {
        return $api.post('/logout')
    }

    static async infoUserAuth(): Promise<AxiosResponse<TUser>> {
        return $api.post('/user', {token: localStorage.getItem('token')})
    }

    static async changeProfileAuth(email: string, login: string, password: string): Promise<AxiosResponse<{user: TUser}>> {
        return $api.post('/changeprofile', {login, email, password})
    }
}

import {useState} from "react";
import TUser from "../types/TUser";
import AuthService from "../services/AuthService";


function useProfile() {
    const [user, setUser] = useState<TUser | null>(null)

    async function loginProfile(login: string, password: string) {
        try {
            const response = await AuthService.loginUserAuth(login, password);
            localStorage.setItem('token', response.data.token);

        } catch (e) {
            console.log(e)
        }
    }

    async function registrationProfile(email: string, login: string, password: string) {
        try {
            await AuthService.registerUserAuth(email,login, password);
        } catch (e) {
            console.log(e);
        }
    }

    function logoutProfile() {
        try {
            localStorage.removeItem('token');
            setUser(null);
        } catch (e) {
            console.log(e);
        }
    }

    async function infoProfile() {
        try {
            const response = await AuthService.infoUserAuth();
            setUser(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    return {
        loginProfile,
        registrationProfile,
        logoutProfile,
        infoProfile,
        user,
    }
}

export default useProfile;
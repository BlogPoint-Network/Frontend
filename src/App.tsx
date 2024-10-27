import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {ProfileContext} from "./context";
import {useEffect} from "react";
import useProfile from "./hooks/useProfile";
import './App.css';

export default function App() {

    const profileManager = useProfile()

    useEffect(() => {
        profileManager.infoProfile()
    }, []);

    return (
        <MantineProvider>
            <ProfileContext.Provider value={profileManager}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </ProfileContext.Provider>
        </MantineProvider>
    );
}
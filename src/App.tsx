import {MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import {BrowserRouter} from "react-router-dom";
import {ProfileContext} from "./context";
import React from "react";
import useProfile from "./hooks/useProfile";
import './App.css';
import AppComponent from "./components/AppComponent";


export default function App() {
    const profileManager = useProfile()

    return (
        <MantineProvider>
            <ProfileContext.Provider value={profileManager}>
                <BrowserRouter>
                    <AppComponent/>
                </BrowserRouter>
            </ProfileContext.Provider>
        </MantineProvider>
    );
}
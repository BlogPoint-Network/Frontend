import React from 'react';
import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AppRouter from "./AppRouter";

import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";

const AppComponent = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{
                height: 52,
            }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <Header/>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <Navigation/>
            </AppShell.Navbar>

            <AppShell.Main>
                <AppRouter/>
            </AppShell.Main>
        </AppShell>
    );
};

export default AppComponent;
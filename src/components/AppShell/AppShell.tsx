import { Header } from '@components/AppShell/components/Header/Header.tsx';
import { Navigation } from '@components/AppShell/components/Navigation/Navigation.tsx';
import { AppShell as AppShellMantine, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AppRouter from '@routes/components/AppRouter/AppRouter.tsx';

export const AppShell = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShellMantine
      header={{
        height: 55,
      }}
      navbar={{
        width: 250,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShellMantine.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Header />
      </AppShellMantine.Header>

      <AppShellMantine.Navbar p="md">
        <Navigation />
      </AppShellMantine.Navbar>

      <AppShellMantine.Main bg="rgb(241 241 241)">
        <AppRouter />
      </AppShellMantine.Main>
    </AppShellMantine>
  );
};

import { Header } from '@components/AppShell/components/Header/Header.tsx';
import { Navigation } from '@components/AppShell/components/Navigation/Navigation.tsx';
import { AppShell as AppShellMantine, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import AppRouter from '@routes/components/AppRouter/AppRouter.tsx';

export const AppShell = () => {
  const [opened, { toggle, close }] = useDisclosure();

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
        <Flex display={{ base: 'flex', md: 'block' }} justify={'space-between'}>
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="lg" />
          <Header />
        </Flex>
      </AppShellMantine.Header>

      <AppShellMantine.Navbar p="md">
        <Navigation closeMenu={close} />
      </AppShellMantine.Navbar>

      <AppShellMantine.Main bg="rgb(241 241 241)">
        <AppRouter />
      </AppShellMantine.Main>
    </AppShellMantine>
  );
};

import { NavLink } from 'react-router-dom';
import { pages } from '@components/AppShell/constants/pagesAndIcons.ts';
import { skyBlueColor } from '@constants';
import { Flex } from '@mantine/core';
import { Heading1, Heading3 } from '@ui';

export const Navigation = ({ closeMenu }: { closeMenu: () => void }) => {
  return (
    <>
      <Heading1 fw={'600'} mb={'20px'} fz={{ base: '48px', md: '36px' }}>
        Навигация
      </Heading1>
      {pages.map((page, index) => (
        <NavLink
          key={index}
          to={page.href}
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal',
          })}
          onClick={closeMenu}
        >
          <Flex gap={15} align={'center'} h={'100%'}>
            {<page.icon color={skyBlueColor} />}
            <Heading3 fz={{ base: '24px', md: '18px' }}>{page.label}</Heading3>
          </Flex>
        </NavLink>
      ))}
    </>
  );
};

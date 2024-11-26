import { NavLink } from 'react-router-dom';
import { pages } from '@components/AppShell/constants/pagesAndIcons.ts';
import { skyBlueColor } from '@constants';
import { Flex, Text } from '@mantine/core';

export const Navigation = () => {
  return (
    <>
      <h1>Навигация</h1>
      {pages.map((page, index) => (
        <NavLink
          key={index}
          to={page.href}
          style={({ isActive }) => ({
            color: isActive ? 'red' : 'black',
            textDecoration: 'none',
            fontWeight: isActive ? 'bold' : 'normal'
          })}
        >
          <Flex gap={15} align={'center'} h={'100%'}>
            {<page.icon color={skyBlueColor} />}
            <Text>{page.label}</Text>
          </Flex>
        </NavLink>
      ))}
    </>
  );
};

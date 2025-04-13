import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { greyColor, skyBlueColor } from '@constants';
import { useProfileLogout } from '@hooks/useProfileLogout.ts';
import { Button, Container, Flex, Image, Text } from '@mantine/core';

import { ProfileContext } from '../../../../app/context';

export const Header = () => {
  const btnProps = {
    h: 40,
    w: 150,
    radius: 'md',
    bd: 'solid black 1px',
  };
  const navigate = useNavigate();
  const profileLogout = useProfileLogout();
  const profileContext = useContext(ProfileContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (profileContext?.user != null) {
      setIsAuthenticated(true);
    }
  }, [profileContext?.user]);

  return (
    <Flex ml={{ sm: '0px', base: '20px' }} mt={{ sm: '0px', base: '-30px' }}>
      <Flex display={{ sm: 'flex', base: 'none' }} align="center" ml={15}>
        <Image radius="md" h={50} w="auto" src={'/icons/logo.png'} />
        <Text size="30px" w={200} fw={700}>
          BlogPoint
        </Text>
      </Flex>

      <Container></Container>

      <Flex align="center" gap="md" justify="flex-end" mr={15}>
        <Button
          {...btnProps}
          bg={greyColor}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isAuthenticated ? profileLogout.mutate() : navigate('login');
          }}
        >
          <Text size="lg" c="black">
            {isAuthenticated ? 'Выйти' : 'Войти'}
          </Text>
        </Button>
        <Button
          {...btnProps}
          bg={skyBlueColor}
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isAuthenticated ? navigate('profile') : navigate('register');
          }}
        >
          <Text size="lg">{isAuthenticated ? 'Профиль' : 'Регистрация'}</Text>
        </Button>
      </Flex>
    </Flex>
  );
};

import { useNavigate } from 'react-router-dom';
import { Flex } from '@mantine/core';
import { BlueButton, FormBox } from '@ui';
import { Heading1 } from '@ui/Heading/Heading1.tsx';

export const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <FormBox>
      <Flex direction="column" gap="50px" align="center">
        <Heading1 ta="center">Сначала вам нужно войти в аккаунт</Heading1>
        <BlueButton onClick={() => navigate('../login')}>
          Войти в аккаунт
        </BlueButton>
      </Flex>
    </FormBox>
  );
};

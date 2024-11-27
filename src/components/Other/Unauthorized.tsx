import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { Flex, Text } from '@mantine/core';
import { FormBox, LongButton } from '@ui';
import { Heading1 } from '@ui/Text/Heading1.tsx';

export const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <FormBox>
      <Flex direction="column" gap="50px" align="center">
        <Heading1 ta='center'>Сначала вам нужно войти в аккаунт</Heading1>
        <LongButton color={skyBlueColor} onClick={() => navigate('../login')}>
          <Text size={'lg'}>Войти в аккаунт</Text>
        </LongButton>
      </Flex>
    </FormBox>
  );
};

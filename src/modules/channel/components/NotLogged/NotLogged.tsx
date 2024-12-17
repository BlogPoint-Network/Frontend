import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { Flex, Text } from '@mantine/core';
import { FormBox, LongButton } from '@ui';

export const NotLogged = () => {
  const navigate = useNavigate();

  return (
    <FormBox>
      <Flex direction="column" gap="50px" align="center">
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '48px', fontWeight: 600 }}>
            Сначала необходимо войти в аккаунт
          </span>
        </div>
        <LongButton color={skyBlueColor} onClick={() => navigate('../login')}>
          <Text size={'lg'}>Войти в аккаунт</Text>
        </LongButton>
      </Flex>
    </FormBox>
  );
};

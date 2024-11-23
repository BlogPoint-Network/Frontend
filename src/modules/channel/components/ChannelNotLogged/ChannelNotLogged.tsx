import { skyBlueColor } from '@constants';
import { Flex, Text } from '@mantine/core';
import { LongButton } from '@ui/Button';
import { FormBox } from '@ui/FormBox';
import { useNavigate } from 'react-router-dom';

export const ChannelNotLogged = () => {
  const navigate = useNavigate()

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

import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { Text } from '@mantine/core';
import { LongButton } from '@ui';

export const ChannelsPageCreateContainer = () => {
  const navigate = useNavigate();

  const navigateToCreation = () => {
    navigate('../CreateChannel');
  };

  return (
    <LongButton color={skyBlueColor} onClick={navigateToCreation}>
      <Text size={'lg'}>Создать новый канал</Text>
    </LongButton>
  );
};

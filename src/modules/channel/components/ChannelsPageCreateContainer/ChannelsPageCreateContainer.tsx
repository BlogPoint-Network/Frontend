import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { BlueButton } from '@ui';

export const ChannelsPageCreateContainer = () => {
  const navigate = useNavigate();

  const navigateToCreation = () => {
    navigate('../CreateChannel');
  };

  return (
    <BlueButton color={skyBlueColor} onClick={navigateToCreation}>
      Создать новый канал
    </BlueButton>
  );
};

import { useNavigate } from 'react-router-dom';
import { BlueButton } from '@ui';

export const ChannelsPageCreateContainer = () => {
  const navigate = useNavigate();

  const navigateToCreation = () => {
    navigate('../CreateChannel');
  };

  return (
    <BlueButton onClick={navigateToCreation}>Создать новый канал</BlueButton>
  );
};

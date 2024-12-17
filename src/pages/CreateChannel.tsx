import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateChannelForm } from '@modules/channel';

const CreateChannel = () => {
  const navigate = useNavigate();

  const isLogged: boolean = true;

  // Если пользователь не авторизован
  useEffect(() => {
    if (!isLogged) {
      navigate('../Unauthorized');
    }
  });

  // Если пользователь авторизован
  return <CreateChannelForm />;
};

export default CreateChannel;

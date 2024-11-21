import { FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileContext } from '../../../context';

interface IPrivateRouterProps {
  children?: ReactNode;
}

export const PrivateRouter: FC<IPrivateRouterProps> = props => {
  const [isFetched, setIsFetched] = useState<boolean>(false);
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();

  console.log('профиль', profile?.user);
  console.log('загружен', profile?.infoUserMutation.isPending);
  console.log('фетч', isFetched);

  useEffect(() => {
    if (!profile?.infoUserMutation.isPending && isFetched) {
      navigate('/');
    }
  }, [profile?.user]);

  useEffect(() => {
    if (profile?.infoUserMutation.isPending) return setIsFetched(true);
  }, [profile?.infoUserMutation.isPending]);

  return <>{props.children}</>;
};

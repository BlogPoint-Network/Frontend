import { createContext, FC, ReactNode } from 'react';
import { useProfile } from '@hooks';
interface ProfileContextProviderProps {
  children: ReactNode;
}
export const ProfileContext = createContext<ReturnType<
  typeof useProfile
> | null>(null);

export const ProfileContextProvider: FC<
  ProfileContextProviderProps
> = props => {
  const profile = useProfile();
  return (
    <ProfileContext.Provider value={profile}>
      {props.children}
    </ProfileContext.Provider>
  );
};

import { createContext, FC, ReactNode, useState } from 'react';
import { IUser } from '@app-types';
interface ProfileContextProviderProps {
  children: ReactNode;
}

interface ProfileContextType {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
}

export const ProfileContext = createContext<ProfileContextType | null>(null);

export const ProfileContextProvider: FC<ProfileContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<IUser | null>(null);

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      {children}
    </ProfileContext.Provider>
  );
};

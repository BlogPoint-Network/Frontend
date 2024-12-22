import { useContext } from 'react';
import { Button } from '@mantine/core';
import { ProfileContext } from '../app/context';

export const ForTest = () => {
  const profile = useContext(ProfileContext);

  return (
    <>
      <Button
        onClick={() => {
          console.log(profile?.infoProfile());
          console.log(profile?.user);
        }}
      >
        Ввести канал
      </Button>
    </>
  );
};

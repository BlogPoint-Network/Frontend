import { useState } from 'react';
import { Button, TextInput } from '@mantine/core';

export const ForTest = () => {
  const [currentChannel, setCurrentChannel] = useState('');
  const [currentUser, setCurrentUser] = useState('');

  return (
    <>
      <TextInput onChange={e => setCurrentChannel(e.currentTarget.value)} />
      <Button
        onClick={() => {
          console.log(currentChannel);
        }}
      >
        Ввести канал
      </Button>
      <TextInput onChange={e => setCurrentUser(e.currentTarget.value)} />
      <Button
        onClick={() => {
          console.log(currentUser);
        }}
      >
        Ввести пользователя
      </Button>
    </>
  );
};

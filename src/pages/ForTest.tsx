import { useChannel } from '@hooks';
import { Button } from '@mantine/core';

export const ForTest = () => {
  const channel = useChannel();
  return (
    <>
      <Button
        onClick={() =>
          channel.getUserChannels().then(value => console.log(value))
        }
      >
        Получить данные канала
      </Button>
    </>
  );
};

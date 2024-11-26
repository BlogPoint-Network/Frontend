import { useState } from 'react';
import { skyBlueColor } from '@constants';
import { FileInput, Grid, Image, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { Button } from '@ui';

export const EditProfileImage = () => {
  const [fileImg, setFileImg] = useState<File | null>(null);
  const openModal = () =>
    modals.openConfirmModal({
      title: 'Загрузите изображение профиля',
      children: (
        <>
          <Text size="sm">Ваше фото</Text>
          <FileInput value={fileImg} onChange={setFileImg} />
        </>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log(fileImg),
    });

  return (
    <Grid.Col span={6}>
      <Text size="xl" mb={10}>
        Аватар пользователя
      </Text>
      <Image
        w={300}
        h={300}
        radius="md"
        src="/assets/images/EmptyPng.png"
        mb={10}
      />
      <Button
        color={skyBlueColor}
        onClick={() => {
          console.log('Открыл');
          openModal();
        }}
      >
        <Text size={'lg'}>Загрузить</Text>
      </Button>
    </Grid.Col>
  );
};

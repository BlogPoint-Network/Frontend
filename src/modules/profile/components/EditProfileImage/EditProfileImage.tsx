import { useState } from 'react';
import Empty from '@assets/images/EmptyPng.png';
import { greyColor, skyBlueColor } from '@constants';
import {
  FileInput,
  Flex,
  Grid,
  Group,
  Image,
  Modal,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Button, Heading3, Heading4 } from '@ui';

export const EditProfileImage = () => {
  const [fileImg, setFileImg] = useState<File | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>Изменение фото пользователя</Heading3>}
      >
        <Heading4>Ваше фото</Heading4>
        <FileInput
          accept="image/png,image/jpeg,image/jpg"
          value={fileImg}
          onChange={setFileImg}
        />
        <Group mt="lg" justify="flex-end">
          <Button onClick={close} color={greyColor}>
            Отменить
          </Button>
          <Button
            color={skyBlueColor}
            onClick={() => {
              console.log(fileImg);
              close();
            }}
          >
            Сохранить
          </Button>
        </Group>
      </Modal>

      <Grid.Col span={6}>
        <Heading4 mb="5px">Аватар пользователя</Heading4>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-end"
          direction="row"
        >
          <Image w={300} h={300} radius="md" src={Empty} mb={10} />
          <Button
            color={skyBlueColor}
            onClick={() => {
              console.log('Открыл');
              open();
            }}
          >
            <Text size={'lg'}>Загрузить</Text>
          </Button>
        </Flex>
      </Grid.Col>
    </>
  );
};

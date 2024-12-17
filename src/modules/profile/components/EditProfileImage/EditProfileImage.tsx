import { useContext, useState } from 'react';
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
import { Button } from '@ui';
import { ProfileContext } from '../../../../app/context';

export const EditProfileImage = () => {
  const [fileImg, setFileImg] = useState<File | null>(null);
  const [opened, { open, close }] = useDisclosure(false);
  const profile = useContext(ProfileContext);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Text size="lg">Изменение фото пользователя</Text>}
      >
        <Text size="lg">Ваше фото</Text>
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
              profile?.editProfileImg(fileImg);
              console.log(fileImg);
              close();
            }}
          >
            Сохранить
          </Button>
        </Group>
      </Modal>

      <Grid.Col span={6}>
        <Text size="xl" mb={10}>
          Аватар пользователя
        </Text>
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

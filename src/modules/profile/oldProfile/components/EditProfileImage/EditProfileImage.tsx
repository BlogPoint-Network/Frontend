import { useContext, useState } from 'react';
import Empty from '@assets/images/EmptyPng.png';
import { FileInput, Flex, Grid, Group, Image, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BlueButton, GreyButton, Heading2, Heading3, Heading4 } from '@ui';

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
        title={<Heading3>Изменение фото пользователя</Heading3>}
      >
        <Heading4>Ваше фото</Heading4>
        <FileInput
          accept="image/png,image/jpeg,image/jpg"
          value={fileImg}
          onChange={setFileImg}
        />
        <Group mt="lg" justify="flex-end">
          <GreyButton onClick={close}>Отменить</GreyButton>
          <BlueButton
            onClick={() => {
              profile?.editProfileImg(fileImg);
              console.log(fileImg);
              close();
            }}
          >
            Сохранить
          </BlueButton>
        </Group>
      </Modal>

      <Grid.Col span={8}>
        <Heading2>Аватар пользователя</Heading2>
        <Flex
          mih={50}
          gap="md"
          justify="flex-start"
          align="flex-end"
          direction={{ sm: 'row', base: 'column' }}
        >
          <Image w={300} h={300} radius="md" src={Empty} mb={10} />
          <BlueButton
            onClick={() => {
              open();
            }}
          >
            Загрузить
          </BlueButton>
        </Flex>
      </Grid.Col>
    </>
  );
};

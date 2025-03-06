import { FC, useContext } from 'react';
import { IUser } from '@app-types';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { BlueButton, GreyButton, Heading3, Heading4, Label } from '@ui';

import { ProfileContext } from '../../../../app/context';

interface IEditProfilePasswordProps {
  user?: IUser;
}

export const EditProfilePassword: FC<IEditProfilePasswordProps> = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const profile = useContext(ProfileContext);
  const form = useForm({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
    },

    validate: {
      oldPassword: (value: string) =>
        value.length < 8 ? 'Пороль должен состоять из 8 символов' : null,
      newPassword: (value: string) =>
        value.length < 8 ? 'Пороль должен состоять из 8 символов' : null,
      repeatPassword: (value, values) =>
        value !== values.newPassword ? 'Пароли не совпадают' : null,
    },
  });
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>Изменение пароля пользователя</Heading3>}
      >
        <form
          onSubmit={form.onSubmit(values => {
            profile?.editProfilePassword(
              values.oldPassword,
              values.newPassword,
            );
            console.log(values);
          })}
        >
          <Flex gap={'10px'} direction="column">
            <TextInput
              label={<Heading4>Старый пароль</Heading4>}
              key={form.key('oldPassword')}
              {...form.getInputProps('oldPassword')}
            />
            <TextInput
              label={<Heading4>Новый пароль</Heading4>}
              key={form.key('newPassword')}
              {...form.getInputProps('newPassword')}
            />

            <TextInput
              label={<Heading4>Подтвердите новый пароль</Heading4>}
              key={form.key('repeatPassword')}
              {...form.getInputProps('repeatPassword')}
            />
          </Flex>
          <Group mt="lg" justify="flex-end">
            <GreyButton
              onClick={() => {
                form.reset();
                close();
              }}
            >
              Отменить
            </GreyButton>
            <BlueButton type="submit">Сохранить</BlueButton>
          </Group>
        </form>
      </Modal>

      <Flex direction={'column'} gap={'15px'} align={'start'}>
        <Label title={'Пароль'} text="########" />
        <BlueButton onClick={open}>Изменить</BlueButton>
      </Flex>
    </>
  );
};

import { useContext } from 'react';
import { skyBlueColor } from '@constants';
import { Button, Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  validationLogin,
  validationPassword,
} from '@modules/profile/constants/validation.ts';
import { FormBox } from '@ui';

import { ProfileContext } from '../../../../app/context';

export const LoginForm = () => {
  const profile = useContext(ProfileContext);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { login: '', password: '' },
    validate: {
      login: validationLogin,
      password: validationPassword,
    },
  });

  return (
    <FormBox>
      <h1>Авторизация пользователя</h1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            profile?.loginProfile(values.login, values.password);
          })}
        >
          <TextInput
            label="Логин"
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <TextInput
            type="password"
            mt="sm"
            label="Введите пароль"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Button type="submit" mt="sm" color={skyBlueColor}>
            Submit
          </Button>
        </form>
      </Group>
    </FormBox>
  );
};

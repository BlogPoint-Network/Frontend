import { skyBlueColor } from '@constants';
import { Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  validationLogin,
  validationPassword,
} from '@modules/profile/constants/validation.ts';
import { useProfileLogin } from '@modules/profile/hooks/useProfileLogin.ts';
import { BlueButton, FormBox, Heading1, Heading4 } from '@ui';

export const LoginForm = () => {
  const profileLogin = useProfileLogin();

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
      <Heading1>Авторизация пользователя</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            profileLogin.mutate(values);
          })}
        >
          <TextInput
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb="5px">Логин</Heading4>}
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <PasswordInput
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb="5px">Пароль</Heading4>}
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <BlueButton type="submit" mt="sm" bg={skyBlueColor}>
            Подтвердить
          </BlueButton>
        </form>
      </Group>
    </FormBox>
  );
};

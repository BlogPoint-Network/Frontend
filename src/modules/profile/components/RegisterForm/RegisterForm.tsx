import { Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  validationEmail,
  validationLogin,
  validationPassword,
  validationRepeatPassword,
} from '@modules/profile/constants/validation.ts';
import { useProfileRegister } from '@modules/profile/hooks/useProfileRegister.ts';
import { IRegistrationData } from '@modules/profile/types/IRegistrationData.ts';
import { BlueButton, FormBox, Heading1, Heading4 } from '@ui';

export const RegisterForm = () => {
  const profileRegister = useProfileRegister();
  const fields = [
    { label: 'Логин', key: 'login' },
    { label: 'Почта', key: 'email' },
    { label: 'Введите пароль', key: 'password' },
    { label: 'Подтвердите пароль', key: 'repeatPassword' },
  ];

  const form = useForm<IRegistrationData>({
    mode: 'uncontrolled',
    initialValues: { login: '', email: '', password: '', repeatPassword: '' },
    validate: {
      login: validationLogin,
      email: validationEmail,
      password: validationPassword,
      repeatPassword: (value, values) =>
        validationRepeatPassword(value, values),
    },
  });

  return (
    <FormBox>
      <Heading1>Регистрация пользователя</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            profileRegister.mutate(values);
          })}
        >
          {fields.map(field => (
            <TextInput
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb="5px">{field.label}</Heading4>}
              key={form.key(field.key)}
              {...form.getInputProps(field.key)}
            />
          ))}
          <BlueButton type="submit" mt="sm">
            Подтвердить
          </BlueButton>
        </form>
      </Group>
    </FormBox>
  );
};

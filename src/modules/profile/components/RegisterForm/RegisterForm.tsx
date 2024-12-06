import { useContext } from 'react';
import { skyBlueColor } from '@constants';
import { Group, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import {
  validationEmail,
  validationLogin,
  validationPassword,
  validationRepeatPassword,
} from '@modules/profile/constants/validation.ts';
import { IRegistrationData } from '@modules/profile/types/IRegistrationData.ts';
import { BlueButton, FormBox, Heading1, Heading4 } from '@ui';

import { ProfileContext } from '../../../../app/context';

export const RegisterForm = () => {
  const profile = useContext(ProfileContext);
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
            console.log(values);
            profile?.registrationProfile(
              values.login,
              values.email,
              values.password,
            );
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
          <BlueButton type="submit" mt="sm" bg={skyBlueColor}>
            Подтвердить
          </BlueButton>
        </form>
      </Group>
    </FormBox>
  );
};

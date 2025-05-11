import { Link } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { useLanguage } from '@hooks/useLanguage.ts';
import { Flex, Group, PasswordInput, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useProfileLogin } from '@modules/profile/hooks/useProfileLogin.ts';
import { useValidationMessages } from '@modules/profile/hooks/useValidationMessages.ts';
import { BlueButton, FormBox, Heading1, Heading4 } from '@ui';

export const LoginForm = () => {
  const { validationLogin, validationPassword } = useValidationMessages();
  const { l } = useLanguage();
  const profileLogin = useProfileLogin();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { login: '', password: '' },
    validate: {
      login: validationLogin,
      password: validationPassword,
    }
  });

  return (
    <FormBox>
      <Heading1>{l.userAuthorization}</Heading1>
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
            label={<Heading4 mb="5px">{l.login}</Heading4>}
            key={form.key('login')}
            {...form.getInputProps('login')}
          />
          <PasswordInput
            size="md"
            mt="sm"
            radius="lg"
            label={<Heading4 mb="5px">{l.password}</Heading4>}
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <BlueButton type="submit" mt="sm" bg={skyBlueColor}>
            {l.btnConfirm}
          </BlueButton>
          <Flex display={{ base: 'block', c620: 'none' }}>
            <Text>{l.notRegisteredYet}</Text>
            <Link to={'/register'}>{l.createAccount}</Link>
          </Flex>
        </form>
      </Group>
    </FormBox>
  );
};

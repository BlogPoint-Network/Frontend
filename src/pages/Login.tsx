import React from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';

const Login = () => {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            login: '',
            email: '',
        },
    });

    return (
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
                label="Логин"
                placeholder="Login"
                key={form.key('login')}
                {...form.getInputProps('login')}
            />
            <TextInput
                mt="md"
                label="Почта"
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />

            <Group justify="center" mt="xl">
                <Button type="submit">Войти в профиль</Button>
            </Group>
        </form>
    );
};

export default Login;
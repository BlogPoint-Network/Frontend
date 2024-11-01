import React, {useContext} from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group  } from '@mantine/core';
import {ProfileContext} from "../context";

const Register = () => {
    const profile = useContext(ProfileContext)

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { login: '', email: '', password: '' , repeatPassword: ''},

        // functions will be used to validate values at corresponding key
        validate: {
            login: (value) => (value.length < 6 ? 'Логин должен состоять болше чем 6 символов' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
            password: (value: string) => (value.length < 8 ? 'Пороль должен состоять из 8 символов' : null),
            repeatPassword: (value, values) => (value !== values.password ? 'Пароль не совпадает' : null),
        },
    });

    return (
        <div style={{
            border: "solid grey 1px",
            padding: "15px 20px",
            borderRadius: "20px",
            background: "white",

        }}>
            <h1>Регистрация пользователя</h1>
            <Group justify="center" grow>
                <form
                    onSubmit={form.onSubmit((values) => {
                        console.log(values);
                        profile?.registrationProfile(values.email, values.password, values.login);
                    })}>
                    <TextInput
                        label="Логин"
                        placeholder="Логин"
                        key={form.key('login')}
                        {...form.getInputProps('login')}
                    />
                    <TextInput
                        mt="sm"
                        label="Почта"
                        placeholder="Почта"
                        key={form.key('email')}
                        {...form.getInputProps('email')}
                    />
                    <TextInput
                        type="password"
                        mt="sm"
                        label="Введите пароль"
                        placeholder="Пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />
                    <TextInput
                        type="checkPassword"
                        mt="sm"
                        label="Подтвердите пароль"
                        placeholder="Пароль"
                        key={form.key('repeatPassword')}
                        {...form.getInputProps('repeatPassword')}
                    />

                    <Button type="submit" mt="sm">
                        Submit
                    </Button>
                </form>
            </Group>
        </div>
    );
};

export default Register;
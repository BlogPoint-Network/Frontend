import React, {useContext} from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group } from '@mantine/core';
import {ProfileContext} from "../context";
import {skyBlueColor} from "../constants";

const Login = () => {

    const profile = useContext(ProfileContext)

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { login: '', password: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            login: (value) => (value.length < 6 ? 'Логин должен состоять болше чем 6 символов' : null),
            password: (value: string) => (value.length < 8 ? 'Пороль должен состоять из 8 символов' : null),
        },
    });

    return (
        <div style={{
            border: "solid grey 1px",
            padding: "15px 20px",
            borderRadius: "20px",
            background: "white",
        }}>
            <h1>Авторизация пользователя</h1>
            <Group justify="center" grow>
                <form
                    onSubmit={form.onSubmit((values) => {
                        profile?.loginProfile(values.login, values.password);
                    })}>
                    <TextInput
                        label="Логин"
                        placeholder="Логин"
                        key={form.key('login')}
                        {...form.getInputProps('login')}
                    />
                    <TextInput
                        type="password"
                        mt="sm"
                        label="Введите пароль"
                        placeholder="Пароль"
                        key={form.key('password')}
                        {...form.getInputProps('password')}
                    />
                    <Button type="submit" mt="sm" color={skyBlueColor}>
                        Submit
                    </Button>
                </form>
            </Group>
        </div>
    );
};

export default Login;
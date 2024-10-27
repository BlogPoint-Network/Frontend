import React, {useState} from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Group  } from '@mantine/core';

const Register = () => {
    const [submittedValues, setSubmittedValues] = useState('');

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { login: '', email: '', password: '' },

        // functions will be used to validate values at corresponding key
        validate: {
            login: (value) => (value.length < 6 ? 'Логин должен состоять болше чем 6 символов' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
            password: (value) => (value.length < 8 ? 'Пороль должен состоять из 8 символов' : null),
        },
    });

    return (
        <div style={{
            marginLeft: '20rem',
            marginRight: '20rem',
            marginTop: '4rem',
            border: "solid grey 1px",
            padding: "15px 20px",
            borderRadius: "20px",
            background: "white",
        }}>
            <Group justify="center" grow>
                <form
                    onSubmit={form.onSubmit((values) => {
                        setSubmittedValues(JSON.stringify(values, null, 2))
                        console.log(form.values)
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

                    <Button type="submit" mt="sm">
                        Submit
                    </Button>
                </form>
            </Group>
        </div>
    );
};

export default Register;
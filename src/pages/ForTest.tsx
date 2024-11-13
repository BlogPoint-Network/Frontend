import React from 'react';
import MyLabel from "../components/MyLabel/MyLabel";
import {skyBlueColor} from "../constants";
import {Button, Group, Text, TextInput} from "@mantine/core";
import {useNavigate} from "react-router-dom";
import {useForm} from "@mantine/form";
import {randomId} from "@mantine/hooks";

const ForTest = () => {

    const fields = [
        {title: 'Логин пользователя', text: 'Vafelka'},
        {title: 'Почта', text: 'Vafelka@gmail.com'},
        {title: 'Пароль', text: '*****'},
    ]
    const navigate = useNavigate()

    const btnProps = {
        h: 40,
        w: 170,
        radius: "md",
        bd: 'solid black 1px',
        mr: 15,
        mb: 15,

    };

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            email: '',
        },
    });

    return (
        <div>
            <TextInput
                label="Name"
                placeholder="Name"
                key={form.key('name')}
                {...form.getInputProps('name')}
            />
            <TextInput
                mt="md"
                label="Email"
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
            />

            <Group justify="center" mt="xl">
                <Button
                    onClick={() =>
                        form.setValues({
                            name: randomId(),
                            email: `${randomId()}@test.com`,
                        })
                    }
                >
                    Set random values
                </Button>
            </Group>
        </div>
    );
};

export default ForTest;
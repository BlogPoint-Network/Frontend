import React, {useContext} from 'react';
import {ProfileContext} from "../context";
import {Button, Flex, Grid, Image, Text, TextInput} from "@mantine/core";
import {greyColor, skyBlueColor} from "../constants";
import { useForm} from "@mantine/form";
import {useNavigate} from "react-router-dom";

const ChangeProfile = () => {

    const profile = useContext(ProfileContext)
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
        initialValues: { login: profile?.user?.login ?? '', email: profile?.user?.email ?? '', oldPassword: '' , newPassword: '', repeatPassword: ''},

        validate: {
            login: (value) => (value.length < 6 ? 'Логин должен состоять болше чем 6 символов' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неправильная почта'),
            oldPassword: (value: string) => (value.length < 8 ? 'Пороль должен состоять из 8 символов' : null),
            newPassword:(value: string) => (value.length < 8 ? 'Пороль должен состоять из 8 символов' : null),
            repeatPassword: (value, values) => (
                value !== values.newPassword ? 'Пароли не совпадают' : null),
        },
    });

    return (
        <div style={{
            padding: '10px 30px 15px 30px',
            marginLeft: '200px',
            marginRight: '200px',
            background: '#D9D9D9',
            border: '1px solid black',
            borderRadius: '30px',
        }}
        >
            <form onSubmit={form.onSubmit((values) => {
                console.log(values);
                // profile?.changeProfile(values.login, values.email, values.newPassword);
            })}>
                <Flex
                    justify="flex-center"
                    align="center"
                    direction="column"
                >
                    <h1 style={{margin: '5px'}}>Изменить профиль пользователя {profile?.user?.login}</h1>
                    <Grid
                        w='auto'
                        ml={20}
                        mr={20}
                    >
                        <Grid.Col span={6}>
                            <Text size="xl" mb={10}>Аватар пользователя</Text>
                            <Flex
                                justify="flex-start"
                                align="flex-end"
                                direction="row"
                                gap="md"
                            >
                                <Image
                                    w={300}
                                    h={300}
                                    radius="md"
                                    src='/assets/images/EmptyPng.png'
                                    mb={10}
                                />
                                <Button {...btnProps} bg={skyBlueColor}><Text size={'lg'}>Загрузить фото</Text></Button>
                            </Flex>

                        </Grid.Col>
                        <Grid.Col span={12}>
                            <TextInput
                                label={<Text size={'lg'}>Логин</Text>}
                                key={form.key('login')}
                                {...form.getInputProps('login')}
                            />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <TextInput
                                label={<Text size={'lg'}>Почта</Text>}
                                key={form.key('email')}
                                {...form.getInputProps('email')}
                            />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <TextInput
                                label={<Text size={'lg'}>Старый пароль</Text>}
                                key={form.key('oldPassword')}
                                {...form.getInputProps('oldPassword')}
                            />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <TextInput
                                label={<Text size={'lg'}>Новый пароль</Text>}
                                key={form.key('newPassword')}
                                {...form.getInputProps('newPassword')}
                            />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <TextInput
                                label={<Text size={'lg'}>Подтвердите новый пароль</Text>}
                                key={form.key('repeatPassword')}
                                {...form.getInputProps('repeatPassword')}
                            />
                        </Grid.Col>

                        <Grid.Col span={12}>
                            <Button{...btnProps} bg={skyBlueColor} type="submit" >
                                <Text size={'lg'}>Сохранить</Text></Button>
                            <Button{...btnProps} bg={greyColor} onClick={() => {
                                navigate('/profile')
                            }}><Text size={'lg'} c='black'>Отменить</Text></Button>
                        </Grid.Col>

                    </Grid>
                </Flex>
            </form>
        </div>
    );
};

export default ChangeProfile;
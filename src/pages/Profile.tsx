import React, {useContext} from 'react';
import {Text, Flex, Grid, Image, Button} from "@mantine/core";
import {greyColor, skyBlueColor} from "../constants";
import {ProfileContext} from "../context";

import MyLabel from "../components/MyLabel/MyLabel";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    const profile = useContext(ProfileContext)
    const navigate = useNavigate()

    const btnProps = {
        h: 40,
        w: 150,
        radius: "md",
        bd: 'solid black 1px',
        mr: 15,
        mb: 15,

    };

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
            <Flex
                justify="center"
                align="center"
                direction="column"
            >
                <h1 style={{margin: '5px'}}>Профиль пользователя {profile?.user?.login}</h1>
                <Grid
                    w='auto'
                    ml={20}
                    mr={20}
                >
                    <Grid.Col span={6}>
                        <Text size="xl" mb={10}>Аватар пользователя</Text>
                        <Image
                            w={300}
                            h={300}
                            radius="md"
                            src='/assets/images/EmptyPng.png'
                            mb={10}
                        />
                        <Button{...btnProps} bg={skyBlueColor}><Text size={'lg'}>Загрузить</Text></Button>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <MyLabel title={'Логин'} text={profile?.user ? profile.user?.login : ''} />
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <MyLabel title={'Почта'} text={profile?.user ? profile.user?.email : ''} />
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <MyLabel title={'Другая информация'} text={''} />
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <Button{...btnProps} bg={skyBlueColor} onClick={() => {
                            navigate('/changeprofile')
                        }}><Text size={'lg'}>Изменить</Text></Button>
                        <Button{...btnProps} bg="rgba(255, 99, 99, 1)"><Text size={'lg'} c='black'>Удалить профиль</Text></Button>
                    </Grid.Col>

                    <Grid.Col span={12}>
                        <Text size={'xl'}>Пароль</Text>
                        <Button{...btnProps} bg={greyColor}><Text size={'lg'} c='black'>Изменить</Text></Button>
                    </Grid.Col>
                </Grid>
            </Flex>
        </div>
    );
};

export default Profile;
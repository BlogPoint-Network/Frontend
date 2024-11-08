import {Text, Image, Button, Container, Flex, NavLink} from '@mantine/core';
import React, {useContext, useEffect, useState} from 'react';
import {greyColor, skyBlueColor} from "../../constants";
import {useNavigate} from "react-router-dom";
import {ProfileContext} from "../../context";


const Header = () => {
    const btnProps = {
        h: 40,
        w: 150,
        radius: "md",
        bd: 'solid black 1px'
    };
    const navigate = useNavigate()
    const profile = useContext(ProfileContext)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (profile?.user != null) {
            setIsAuthenticated(true);
        }
    }, [profile?.user])

    return (
        <Flex>
            <Flex align="center" ml={15}>
                <Image
                    radius="md"
                    h={50}
                    w="auto"
                    src={'/assets/images/logo.png'}
                />
                <Text size="30px" w={200} fw={700}>
                    BlogPoint
                </Text>
            </Flex>

            <Container></Container>

            <Flex align="center" gap="md" justify="flex-end" mr={15}>
                <Button {...btnProps} bg={greyColor}
                        onClick={() => {
                            isAuthenticated ? profile?.logoutProfile() : navigate('login');
                        }}
                >
                    <Text size='lg' c='black'>
                        {isAuthenticated ? 'Выйти' : 'Войти'}
                    </Text>
                </Button>
                <Button {...btnProps} bg={skyBlueColor}
                        onClick={() => {
                            isAuthenticated ? navigate('profile') : navigate('register');
                        }}
                >
                    <Text size='lg'>
                        {isAuthenticated ? 'Профиль' : 'Регистрация'}
                    </Text>
                </Button>
            </Flex>
        </Flex>
    );
};

export default Header;
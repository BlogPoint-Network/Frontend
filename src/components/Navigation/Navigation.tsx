import React, {useState} from 'react';
import {
    IconHome,
    IconAbacus,
    IconUsersGroup,
    IconUserHeart,
    IconChartBarPopular,
    IconTrendingUp,
    IconQuestionMark, IconUser
} from "@tabler/icons-react";
import {NavLink as MNavLink} from "@mantine/core";
import {NavLink as RNavLink} from "react-router-dom";
import {skyBlueColor} from "../../constants";

const Navigation = () => {
    const pages = [
        {label: 'Главная', icon: IconHome, href: '../'},
        {label: 'Профиль', icon: IconUser, href: '../Profile'},
        {label: 'Подписки', icon: IconUserHeart, href: '../ChannelSubscribe'},
        {label: 'Мой канал', icon: IconUsersGroup, href: '../MyChannel'},
        {label: 'Рекомендации', icon: IconChartBarPopular, href: '../Recommendations'},
        {label: 'Популярные каналы', icon: IconTrendingUp, href: '../PopularChannels'},
        {label: 'Рейтинг каналов', icon: IconQuestionMark, href: '../RatingOfChannels'},
        {name: "Тестовая", icon: IconAbacus, href: '../Test', label: 'Для тестов'},
        {name: "Тестовая", icon: IconAbacus, href: '../ChangeProfile', label: 'Для изменения профиля'},
    ]
    const [active, setActive] = useState(0);

     return (
         <>
             <h1>Навигация</h1>
             {pages.map((page, index) =>
                <RNavLink
                    to={page.href}
                    style={{ textDecoration: 'none', color: 'black' }}
                >
                    <MNavLink
                        label={page.label}
                        leftSection={<page.icon size="1.5rem" stroke={1.5} color={skyBlueColor}/>}
                        active={index === active}
                        onClick={() => setActive(index)}
                    />
                </RNavLink>
             )}

         </>
     )
};

export default Navigation;
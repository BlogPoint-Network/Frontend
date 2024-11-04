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
import {NavLink} from "@mantine/core";
import {skyBlueColor} from "../../constants";

const Navigation = () => {
    const pages = [
        {label: 'Главная', icon: IconHome, href: '../'},
        {label: 'Профиль', icon: IconUser, href: '../Profile'},
        {label: 'Подписки', icon: IconUserHeart, href: '../'},
        {label: 'Мой канал', icon: IconUsersGroup, href: '../'},
        {label: 'Рекомендации', icon: IconChartBarPopular, href: '../'},
        {label: 'Популярные каналы', icon: IconTrendingUp, href: '../'},
        {label: 'Рейтинг каналов', icon: IconQuestionMark, href: '../'},
        {name: "Тестовая", icon: IconAbacus, href: '../Test', label: 'Для тестов'},
    ]
    const [active, setActive] = useState(0);

     return (
         <>
             <h1>Навигация</h1>
             {pages.map((page, index) =>
                 <NavLink
                     active={index === active}
                     key={index}
                     href={page.href}
                     label={page.label}
                     leftSection={<page.icon size="1.5rem" stroke={1.5} color={skyBlueColor}/>}
                     onClick={() => {
                        setActive(index)
                     }}
                 />
             )}
         </>
     )
};

export default Navigation;
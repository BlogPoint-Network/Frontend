import React, {useEffect, useState} from 'react';
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
import {useLocation, useNavigate} from "react-router-dom";

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
    ]
    const [active, setActive] = useState(() => {
        return localStorage.getItem('activePathIndex') || 0;
    });
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const currentPage = location.pathname;
        setActive(currentPage);
        localStorage.setItem('activePath', currentPage);
    }, [location.pathname]);

     return (
         <>
             <h1>Навигация</h1>
             {pages.map((page, index) =>
                 <NavLink

                     key={index}
                     href={page.href}
                     label={page.label}
                     leftSection={<page.icon size="1.5rem" stroke={1.5} color={skyBlueColor}/>}
                     onClick={() => {

                     }}
                 />
             )}
         </>
     )
};

export default Navigation;
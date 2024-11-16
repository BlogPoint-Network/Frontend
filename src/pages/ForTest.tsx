import React from 'react';
import {
    IconAbacus,
    IconChartBarPopular,
    IconHome, IconQuestionMark,
    IconTrendingUp,
    IconUser,
    IconUserHeart,
    IconUsersGroup
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const ForTest = () => {

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

    return (
        <NavLink
            to="/messages"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
            }
        >
            Messages
        </NavLink>
    )
};

export default ForTest;
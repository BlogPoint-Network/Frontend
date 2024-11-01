import React, {useState} from 'react';
import {IconHome, IconUserCircle, IconLogin, IconUserPlus, IconAbacus} from "@tabler/icons-react";
import {NavLink} from "@mantine/core";
import {skyBlueColor} from "../../constants";

const Navigation = () => {
    const pages = [
        {name: "Главная", icon: IconHome, href: '../', label: 'Главная'},
        {name: "Авторизация", icon: IconLogin, href: '../Login', label: 'Авторизация'},
        {name: "Регистрация", icon: IconUserPlus, href: '../Register', label: 'Регистрация'},
        {name: "Профиль", icon: IconUserCircle, href: '../Profile', label: 'Профиль'},
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
                     onClick={(e) => {
                        setActive(index)
                     }}
                 />
             )}
         </>
     )
};

export default Navigation;
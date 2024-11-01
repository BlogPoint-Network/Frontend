import React from 'react';
import {IconHome2} from "@tabler/icons-react";
import MyLink from "../MyLink/MyLink";

const Navigation = () => {
    const pages = [
        {name: "Home", icon: <IconHome2/>, href: '../', label: 'Home'},
        {name: "Регистрвция", icon: <IconHome2/>, href: '../Register', label: 'Register'},
    ]

    

    return (
        <>

            <MyLink href={pages[0].href} label={pages[0].label} icon={pages[0].icon} />
        </>
    );
};

export default Navigation;
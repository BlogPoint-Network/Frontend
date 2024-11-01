import React from 'react';
import {NavLink} from "@mantine/core";

type MyLinkProps = {
    href: string;
    label: string;
    icon: object;
}

const MyLink: React.FC<MyLinkProps> = props => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <NavLink
            href={props.href}
            label={props.label}

        />
    );
};

export default MyLink;
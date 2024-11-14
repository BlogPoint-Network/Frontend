import React, {FC, ReactNode, useContext, useEffect, useLayoutEffect} from 'react';
import {ProfileContext} from "../../../context";
import {Loader} from "@mantine/core";

interface IProfileLoaderProps {
    children?: ReactNode
}

export const ProfileLoader: FC<IProfileLoaderProps> = props => {
    const profileController = useContext(ProfileContext);

    useLayoutEffect(() => {
        if (profileController) profileController.infoUserMutation.mutate()
    }, []);

    useEffect(() => {
    }, [profileController?.infoUserMutation.isIdle]);

    if (profileController?.infoUserMutation.isPending) return <Loader />
    else return (
        <>
            {props.children}
        </>
    );
};
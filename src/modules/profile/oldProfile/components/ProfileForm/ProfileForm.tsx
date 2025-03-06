import { FC, ReactNode } from 'react';
import { IUser } from '@app-types';
import { Flex, Grid } from '@mantine/core';
import { FormBox, Heading1 } from '@ui';

interface IProfileFormProps {
  user?: IUser;
  children?: ReactNode;
}

export const ProfileForm: FC<IProfileFormProps> = props => {
  return (
    <FormBox>
      <Heading1 mb="20px">Профиль пользователя {props.user?.login}</Heading1>
      <Grid w="auto" ml={20} mr={20}>
        {props.children}
      </Grid>
    </FormBox>
  );
};

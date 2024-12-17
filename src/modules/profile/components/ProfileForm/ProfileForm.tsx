import { FC, ReactNode } from 'react';
import { IUser } from '@app-types';
import { Flex, Grid } from '@mantine/core';
import { FormBox } from '@ui';

interface IProfileFormProps {
  user?: IUser;
  children?: ReactNode;
}

export const ProfileForm: FC<IProfileFormProps> = props => {
  return (
    <FormBox>
      <Flex justify="center" align="center" direction="column">
        <h1 style={{ margin: '5px' }}>
          Профиль пользователя {props.user?.login}
        </h1>
        <Grid w="auto" ml={20} mr={20}>
          {props.children}
        </Grid>
      </Flex>
    </FormBox>
  );
};

import { FC, ReactNode } from 'react';
import { IUser } from '@app-types';
import { Flex } from '@mantine/core';
import { FormBox, Heading1 } from '@ui';

interface IProfileFormProps {
  user?: IUser;
  children?: ReactNode;
}

export const ProfileForm: FC<IProfileFormProps> = props => {
  return (
    <FormBox>
      <Heading1 mb="20px">Профиль пользователя {props.user?.login}</Heading1>
      {/*<Group justify="center" grow>*/}
      <Flex direction={'column'}>{props.children}</Flex>
      {/*</Group>*/}
    </FormBox>
  );
};

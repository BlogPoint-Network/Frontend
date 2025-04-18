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
      <Heading1 fz={{base: '30px', xss: '48px'}} mb="20px">Профиль пользователя {props.user?.login}</Heading1>
      <Flex w="auto" ml={20} mr={20} direction="column">
        {props.children}
      </Flex>
    </FormBox>
  );
};

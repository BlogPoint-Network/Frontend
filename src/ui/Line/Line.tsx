import { FC } from 'react';
import { darkBackgroundColor } from '@constants';
import { Container } from '@mantine/core';

interface ILineProps {
  height: string;
}

export const Line: FC<ILineProps> = props => {
  return (
    <Container
      fluid
      h={props.height}
      m="0px"
      bg={darkBackgroundColor}
    ></Container>
  );
};

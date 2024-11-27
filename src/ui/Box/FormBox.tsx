import { FC } from 'react';
import { boxFormColor } from '@constants';
import { Container, ContainerProps } from '@mantine/core';

export const FormBox: FC<ContainerProps> = ({ children, ...props }) => {
  const FormBoxProps = {
    style: { borderRadius: '30px' },
    p: '10px 30px 15px 30px',
    ml: '200px',
    mr: '200px',
    bg: boxFormColor,
    bd: '1px solid black',
    radius: '30px',
  };

  return (
    <Container {...FormBoxProps} {...props}>
      {children}
    </Container>
  );
};

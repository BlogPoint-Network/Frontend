import { FC } from 'react';
import { boxFormColor } from '@constants';
import { Container, ContainerProps } from '@mantine/core';

export const FullWidthBox: FC<ContainerProps> = ({ children, ...props }) => {
  const FormBoxProps = {
    style: { borderRadius: '30px' },
    p: '10px 30px 15px 30px',
    bg: boxFormColor,
    bd: '1px solid black',
    radius: '30px',
    w: '100%',
  };

  return (
    <Container {...FormBoxProps} {...props}>
      {children}
    </Container>
  );
};

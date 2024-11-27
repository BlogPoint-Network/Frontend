import { FC } from 'react';
import {
  Button as MantineButton,
  ButtonProps,
  PolymorphicComponentProps,
} from '@mantine/core';

export const Button: FC<PolymorphicComponentProps<'button', ButtonProps>> = ({
  children,
  color,
  ...props
}) => {
  const btnProps = {
    h: 40,
    w: 160,
    radius: 'md',
    bd: 'solid black 1px',
    mr: 15,
    mb: 15,
    bg: color,
  };

  return (
    <MantineButton {...btnProps} {...props}>
      {children}
    </MantineButton>
  );
};

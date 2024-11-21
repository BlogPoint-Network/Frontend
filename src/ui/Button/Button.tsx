import { FC } from 'react';
import {
  Button as MantineButton,
  ButtonProps,
  PolymorphicComponentProps,
} from '@mantine/core';

export const Button: FC<PolymorphicComponentProps<'button', ButtonProps>> = ({
  children,
  ...props
}) => {
  const btnStyleProps = {
    h: 40,
    w: 150,
    radius: 'md',
    bd: 'solid black 1px',
    mr: 15,
    mb: 15,
    bg: props.color,
  };

  return (
    <MantineButton {...btnStyleProps} {...props}>
      {children}
    </MantineButton>
  );
};

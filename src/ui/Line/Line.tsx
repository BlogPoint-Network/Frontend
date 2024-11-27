import { darkBackgroundColor } from '@constants';
import { Container } from '@mantine/core';

export const Line = ({ ...props }) => {
  const LineProps = {
    h: '8px',
    m: '0px',
    w: '100%',
    bg: darkBackgroundColor,
  };

  return <Container fluid {...props} {...LineProps} />;
};

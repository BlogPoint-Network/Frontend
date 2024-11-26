import { FC } from 'react';
import { Box, Text } from '@mantine/core';

interface ILabelProps {
  title: string;
  text: string;
}

export const Label: FC<ILabelProps> = props => {
  return (
    <Box w={600}>
      <Text size={'xl'} mb={10}>
        {props.title}{' '}
      </Text>
      <div
        style={{
          border: 'solid 1px black',
          borderRadius: '15px',
          padding: '5px 15px 0 15px',
          background: 'white',
          height: '42px',
        }}
      >
        <Text size={'lg'}>{props.text}</Text>
      </div>
    </Box>
  );
};

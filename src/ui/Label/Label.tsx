import { FC } from 'react';
import { Box, Text } from '@mantine/core';
import { Heading4 } from '@ui/Text/Heading4.tsx';

interface ILabelProps {
  title: string;
  text: string;
}

export const Label: FC<ILabelProps> = ({ title, text }) => {
  return (
    <Box w={600}>
      <Heading4 mb='5px'>
        {title}{' '}
      </Heading4>
      <div
        style={{
          border: 'solid 1px black',
          borderRadius: '15px',
          padding: '5px 15px 0 15px',
          background: 'white',
          height: '42px',
        }}
      >
        <Text size={'lg'}>{text}</Text>
      </div>
    </Box>
  );
};

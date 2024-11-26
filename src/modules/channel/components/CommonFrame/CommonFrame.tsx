import { FC, ReactNode } from 'react';
import { Flex } from '@mantine/core';

import '@mantine/carousel/styles.css';

interface IMainPageFrame {
  children?: ReactNode;
}
export const CommonFrame: FC<IMainPageFrame> = props => {
  return (
    <Flex
      ml={{ sm: '50px', base: '0px' }} // в совсем узких окнах отступа нет
      id="mainPageFlexbox"
      gap="25px"
      direction="column"
      wrap="wrap"
      w="100%"
      align="center"
      // style={{overflow: 'hidden'}}
    >
      {props.children}
    </Flex>
  );
};

import { mainBackgroundColor } from '@constants';
import { Container, Flex, Image } from '@mantine/core';

export const LogoMainPage = () => {
  return (
    <Container
      id="LogoContainer"
      bg={mainBackgroundColor}
      h="160px"
      m="15px auto"
      bd="2px solid black"
      display="flex"
      w="100%"
      style={{
        borderRadius: '20px',
        maxWidth: '650px',
      }}
    >
      <Flex align="center" justify="center" w="100%">
        <Image h="80%" src={'/src/app/assets/images/Logo.png'} />
        <span style={{ fontSize: '65px' }}>BlogPoint</span>
      </Flex>
    </Container>
  );
};

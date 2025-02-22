import { CommonFrame, Heading1 } from '@ui';
import { PopularChannelsContainer } from '@modules/channel';
import { Container } from '@mantine/core';

export const PopularChannels = () => {
  return (
    <>
      <CommonFrame>
        <Container id="popularChannelsContainer" mb="40px">
          <Heading1 ta="center" mb="40px">
            Популярные каналы
          </Heading1>
          <PopularChannelsContainer />
        </Container>
      </CommonFrame>
    </>
  )
};

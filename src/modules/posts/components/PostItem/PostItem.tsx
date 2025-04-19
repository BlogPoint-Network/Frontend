import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import { skyBlueColor } from '@constants';
import { Card, Center, Flex, Grid, Image, Text } from '@mantine/core';
import { IconEye, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  Heading2,
  Heading4,
  Heading5,
  List,
  Tag,
} from '@ui';
import { addSpacesToNumber } from '@utils';

export const PostItem = (props: IPost) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const extractTextFromHTML = (html: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <Card
      withBorder
      shadow="sm"
      radius="md"
      bd="1px solid black"
      id={'RecommendationPost' + props.id}
      w={{ base: '345px', xs: '400px', sm: '450px' }}
      style={{
        position: 'relative',
        height: 'auto',
        flexShrink: 0,
      }}
    >
      <Card.Section mb="10">
        <Flex
          gap={{ base: 'sm', sm: 'lg' }}
          justify="flex-start"
          align="center"
          direction="row"
          mt="15"
          ml={{ base: '10px', sm: '20' }}
          mr={{ base: '5px', xs: '0px', sm: '15px' }}
        >
          <ChannelIconImage src={props.channelIcon.url} />
          <Flex justify={'space-between'} w="80%">
            <Heading4
              fw="500"
              truncate="end"
              onClick={() => navigate(`/channel/:${props.channelId}`)}
              style={{
                color: isHovered ? 'blue' : 'black',
                transition: 'color 0.3s ease',
                maxWidth: 'calc(100% - 50px)',
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {props.channelName.length > 25
                ? props.channelName.substring(0, 25) + '...'
                : props.channelName}
            </Heading4>
            <Heading5 fz={{ base: '14px', xs: '17px' }}>
              {props.dateOfCreation}
            </Heading5>
          </Flex>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Image src={props.previewImage.url} />
      </Card.Section>
      <Heading2 fw={'600'} lineClamp={2} ta="center">
        {props.title}
      </Heading2>
      <Card.Section pl="15" pr="15" mb="10">
        <Text lineClamp={3}>{extractTextFromHTML(props.content)}</Text>
      </Card.Section>
      <Card.Section pl="15" pr="15" mb="10">
        <Flex direction={'row'} gap="10px" wrap={'wrap'}>
          <List items={props.tags} renderItem={Tag} />
        </Flex>
      </Card.Section>
      {/*лайки дизлайки просмотры*/}
      <Card.Section pl="15" pr="15" mb="10">
        <Flex justify="space-between" align="center" wrap="wrap" gap="md">
          {/* Лайки и дизлайки */}
          <Flex align="center" gap="md">
            <Flex align="center" gap="xs">
              <IconThumbUp size={28} />
              <Heading5
                fz={{ base: '14px', xs: '17px' }}
                c="green"
              >
                {addSpacesToNumber(Number(props.likes))}
              </Heading5>
            </Flex>

            <Flex align="center" gap="xs">
              <IconThumbDown size={28} />
              <Heading5
                fz={{ base: '14px', xs: '17px' }}
                c="red"
              >
                {addSpacesToNumber(Number(props.dislikes))}
              </Heading5>
            </Flex>
          </Flex>

          {/* Просмотры справа */}
          <Flex align="center" gap="xs">
            <IconEye size={28} />
            <Heading5
              fz={{ base: '14px', xs: '17px' }}
              c={skyBlueColor}
            >
              {addSpacesToNumber(Number(props.views))}
            </Heading5>
          </Flex>
        </Flex>
        {/*<Grid>*/}
        {/*  <Grid.Col span={3} offset={addSpacesToNumber(Number(props.dislikes)).length > 5 ? 0 : 1}>*/}
        {/*    <Center inline>*/}
        {/*      <IconThumbUp size={35} />*/}
        {/*      <Heading5*/}
        {/*        fz={{base: '14px', sm: '17px'}}*/}
        {/*        c={'green'}*/}
        {/*        style={{ whiteSpace: 'nowrap' }}*/}
        {/*     >*/}
        {/*        {addSpacesToNumber(Number(props.likes))}*/}
        {/*      </Heading5>*/}
        {/*    </Center>*/}
        {/*  </Grid.Col>*/}

        {/*  <Grid.Col span={3} >*/}
        {/*    <Center inline>*/}
        {/*      <IconThumbDown size={35} />*/}
        {/*      <Heading5*/}
        {/*        fz={{base: '14px', sm: '17px'}}*/}
        {/*        c={'red'}*/}
        {/*        style={{ whiteSpace: 'nowrap' }}*/}
        {/*      >*/}
        {/*        {addSpacesToNumber(Number(props.dislikes))}*/}
        {/*      </Heading5>*/}
        {/*    </Center>*/}
        {/*  </Grid.Col>*/}

        {/*  <Grid.Col span="content" offset={addSpacesToNumber(Number(props.views)).length > 5 ? 1 : 0}>*/}
        {/*    <Center inline>*/}
        {/*      <IconEye size={35} />*/}
        {/*      <Heading5*/}
        {/*        fz={{base: '14px', sm: '17px'}}*/}
        {/*        c={skyBlueColor}*/}
        {/*        style={{ whiteSpace: 'nowrap' }}*/}
        {/*      >*/}
        {/*        {addSpacesToNumber(Number(props.views))}*/}
        {/*      </Heading5>*/}
        {/*    </Center>*/}
        {/*  </Grid.Col>*/}
        {/*</Grid>*/}
      </Card.Section>
      {/*читать*/}
      <Flex justify={'center'}>
        <BlueButton
          mb="0px"
          onClick={() =>
            navigate(`/channel/${props.channelId + ''}/post/${props.id + ''}`)
          }
        >
          Читать
        </BlueButton>
      </Flex>
    </Card>
  );
};

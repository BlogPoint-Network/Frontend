import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import { skyBlueColor } from '@constants';
import { Card, Center, Flex, Grid, Image, Text } from '@mantine/core';
import { IconEye, IconHeart, IconThumbDown } from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  Heading2,
  Heading4,
  Heading5,
  List,
  Tag,
} from '@ui';

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
      style={{
        position: 'relative',
        height: 'auto',
        width: '450px',
        flexShrink: 0,
      }}
    >
      <Card.Section mb="10">
        <Flex
          gap="xl"
          justify="flex-start"
          align="center"
          direction="row"
          mt="15"
          ml="35"
        >
          <ChannelIconImage src={props.channelIcon.url} />
          <Heading4
            fw="500"
            truncate="end"
            onClick={() => navigate(`/channel/:${props.channelId}`)}
            style={{
              color: isHovered ? 'blue' : 'black',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {props.channelName.length > 25
              ? props.channelName.substring(0, 25) + '...'
              : props.channelName}
          </Heading4>
          <Heading5>{props.dateOfCreation}</Heading5>
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
      <Card.Section pl="15" pr="15" mb="10">
        <Grid>
          <Grid.Col span={3}>
            <Center inline>
              <IconHeart size={35} />
              <Heading5 c={'green'}>{props.likes}</Heading5>
            </Center>
          </Grid.Col>
          <Grid.Col span={3}>
            <Center inline>
              <IconThumbDown size={35} />
              <Heading5 c={'red'}>{props.dislikes}</Heading5>
            </Center>
          </Grid.Col>
          <Grid.Col span="content" offset={3}>
            <Center inline>
              <IconEye size={35} />
              <Heading5 c={skyBlueColor}>{props.views}</Heading5>
            </Center>
          </Grid.Col>
        </Grid>
      </Card.Section>
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

import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import { greyColor, skyBlueColor } from '@constants';
import { Box, Card, Center, Flex, Grid, Image } from '@mantine/core';
import { IconEye, IconHeart, IconThumbDown } from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  Heading1,
  Heading3,
  Heading4,
  Heading5,
  List,
  Tag,
} from '@ui';
import { renderImgContent } from '@utils/renderImgContent.ts';

export const PostItemPage: FC = () => {
  const post: IPost = {
    id: '1',
    channelId: '1',
    channelName: 'Путешествия и путешествия',
    channelIcon: {
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-1024.png',
    },
    previewImage: {
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'https://img.goodfon.com/original/3709x2483/e/3e/gory-vershiny-sneg-uschele.jpg',
    },
    title: 'Отправьтесь в путешествие уже сейчас!',
    content: `<h1>Сокрушительная скука</h1>
              <p>Крис Миллс</p>
              <h2>Глава 1: Тёмная ночь</h2>
              <p>Это была тёмная ночь. Где-то кричала сова. Дождь обрушился на ...</p>
              <h2>Глава 2: Вечное молчание</h2>
              <p>Наш главный герой ничего не мог, когда шёпот из тёмной фигуры ...</p>
              <h3>Призрак говорит</h3>
              <p>
                Прошло ещё несколько часов, когда внезапно призрак выпрямился и воскликнул:
                «Пожалуйста, помилуй мою душу!»
              </p>`,
    contentImages: [
      {
        name: 'img1',
        filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
        url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      },
    ],
    tags: [
      { id: 44, category_id: 6, name: 'КомпьютерныеИгры', color: 'red' },
      { id: 51, category_id: 6, name: 'Киберспорт', color: 'red' },
      { id: 52, category_id: 6, name: 'Стриминг', color: 'red' },
      { id: 45, category_id: 6, name: 'СоревновательныеИгры', color: 'red' },
    ],
    mediaFiles: [
      {
        filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
        url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      },
      {
        filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
        url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      },
      {
        filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
        url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      },
    ],
    dateOfCreation: '15:00',
    likes: 45,
    dislikes: 1,
    views: 1352,
  };
  // const [post, setPost] = useState<IPost | null>(newExamplePost);
  // const { channelId, postId } = useParams();
  const [isHovered, setIsHovered] = useState(false);
  // const postController = usePostById(Number(channelId), Number(postId));
  const navigate = useNavigate();

  // useEffect(() => {
  //   const test = async () => {
  //     setPost((await postController.data?.data) ?? null);
  //   };
  //   test();
  // }, []);

  const processedContent = renderImgContent(
    post?.content ?? '',
    post?.contentImages ?? [],
  );
  const getFileType = (filename: string): string => {
    const ext = filename.split('.').pop()?.toLowerCase();
    if (!ext) return 'unknown';

    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
    const videoExtensions = ['mp4', 'mov', 'avi', 'mkv', 'webm'];
    const audioExtensions = ['mp3', 'wav', 'ogg', 'flac'];

    if (imageExtensions.includes(ext)) return 'image';
    if (videoExtensions.includes(ext)) return 'video';
    if (audioExtensions.includes(ext)) return 'audio';

    return 'unknown';
  };

  const getFileTypeFromUrl = (url: string): string => {
    return getFileType(url);
  };

  return (
    <Card
      style={{
        position: 'relative',
        width: '1000px',
        borderRadius: '15px',
        height: 'auto',
        paddingBottom: '50px',
      }}
    >
      <Card.Section>
        <Flex gap="lg" justify="center" align="center" direction="row">
          <ChannelIconImage src={post?.channelIcon.url} />
          <Heading3
            fw="500"
            onClick={() => navigate(`/channel/:${post?.channelId}`)}
            style={{
              color: isHovered ? 'blue' : 'black',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {post?.channelName}
          </Heading3>
          <BlueButton mt={15} onClick={() => alert('Вы подписались')}>
            Подписаться
          </BlueButton>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Flex gap={'md'} justify="center" align="center" direction="column">
          <Heading1 fw={'600'} ta="center" w={900}>
            {post?.title}
          </Heading1>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Center>
          <Image w={900} src={post?.previewImage.url} />
        </Center>
      </Card.Section>
      <Card.Section>
        <Center>
          <div
            style={{ width: 900 }}
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </Center>
      </Card.Section>
      <Center>
        <Box w={950} bg={greyColor} h={1} m={15} />
      </Center>
      <Card.Section pl="15" pr="15" mb="10">
        <Center>
          <Flex direction={'row'} gap="10px" justify={'flex-start'}>
            <List items={post.tags} renderItem={Tag} />
          </Flex>
        </Center>
      </Card.Section>
      <Card.Section>
        <Center>
          <Grid w={900}>
            <Grid.Col span={4}>
              <Heading4 fw={600}>
                Дата публикации {post?.dateOfCreation}
              </Heading4>
            </Grid.Col>
            <Grid.Col span={4} offset={4}>
              <Grid>
                <Grid.Col span={3}>
                  <Center inline>
                    <IconHeart size={35} />
                    <Heading5 c={'green'}>{post?.likes}</Heading5>
                  </Center>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Center inline>
                    <IconThumbDown size={35} />
                    <Heading5 c={'red'}>{post?.dislikes}</Heading5>
                  </Center>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Center inline>
                    <IconEye size={35} />
                    <Heading5 c={skyBlueColor}>{post?.views}</Heading5>
                  </Center>
                </Grid.Col>
              </Grid>
            </Grid.Col>
          </Grid>
        </Center>
      </Card.Section>
      <Center>
        <Box w={950} bg={greyColor} h={1} m={15} />
      </Center>
      <Card.Section>
        <Grid grow ml={55}>
          {post.mediaFiles.length > 0 &&
            post.mediaFiles.map((item, index) => (
              <Card withBorder key={index} w={'auto'} h={'auto'} m={5}>
                <Flex align="center" justify="space-between">
                  <div>
                    {getFileTypeFromUrl(item.url) === 'image' && (
                      <img src={item.url} alt="uploaded" width={400} />
                    )}
                    {getFileTypeFromUrl(item.url) === 'video' && (
                      <video src={item.url} controls width={400} />
                    )}
                    {getFileTypeFromUrl(item.url) === 'audio' && (
                      <audio src={item.url} controls />
                    )}
                  </div>
                </Flex>
              </Card>
            ))}
        </Grid>
      </Card.Section>
    </Card>
  );
};

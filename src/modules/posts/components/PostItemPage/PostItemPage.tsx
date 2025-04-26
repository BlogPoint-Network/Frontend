import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { greyColor, skyBlueColor } from '@constants';
import { Box, Card, Flex, Grid, Image } from '@mantine/core';
import { useGetPostById } from '@modules/posts/hooks/useGetPostById.ts';
import { IconEye, IconThumbDown, IconThumbUp } from '@tabler/icons-react';
import {
  BlueButton,
  ChannelIconImage,
  Heading1,
  Heading2,
  Heading4,
  Heading5,
} from '@ui';
import { addSpacesToNumber } from '@utils';
import { renderImgContent } from '@utils/renderImgContent.ts';

export const PostItemPage: FC = () => {
  const { postId } = useParams();
  const post = useGetPostById(Number(postId));
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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
      w={'100%'}
      pos={'relative'}
      pb={'50px'}
      pl={{ base: '25px', sm: '30px', lg: '40px' }}
      pr={{ base: '25px', sm: '30px', lg: '40px' }}
      style={{
        maxWidth: '1000px',
        borderRadius: '15px',
      }}
    >
      <Card.Section>
        <Flex
          justify="flex-start"
          align="center"
          gap={{ base: 'sm', sm: 'lg' }}
          mt="15"
        >
          <ChannelIconImage src={post?.channelIcon.url} />
          <Heading2
            fz={{ base: '17px', sm: '22px', md: '26px' }}
            pr={{ sm: '190px' }} // для кнопки подписаться
            fw="500"
            truncate="end"
            onClick={() => navigate(`/channel/:${post?.channelId}`)}
            style={{
              color: isHovered ? 'blue' : 'black',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {
              post?.channelName && post?.channelName.length > 25
              ? post.channelName.substring(0, 25) + '...'
              : post?.channelName
            }
          </Heading2>
          <BlueButton
            pos={'absolute'}
            right={{ base: '0px', lg: '5px' }}
            mt="10px"
            display={{ base: 'none', sm: 'block' }}
            onClick={() => alert('Вы подписались')}
          >
            Подписаться
          </BlueButton>
        </Flex>
      </Card.Section>
      <Card.Section>
        <Heading1 ta="center" m={'10px auto'}>
          {post?.title}
        </Heading1>
      </Card.Section>
      <Card.Section>
        <Image
          w="100%"
          height={'auto'}
          style={{ objectFit: 'contain' }}
          src={post?.previewImage.url}
          // ВЕРТИКАЛЬНОЕ ИЗОБРАЖЕНИЕ ТЕСТ
          // src={
          //   'https://images.unsplash.com/photo-1564754943164-e83c08469116?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dmVydGljYWx8ZW58MHx8MHx8fDA%3D'
          // }
        />
      </Card.Section>
      <Card.Section>
        <div dangerouslySetInnerHTML={{ __html: processedContent }} />
      </Card.Section>
      <Box w={'100%'} bg={greyColor} h={1} m={'15px -10px'} />
      <Card.Section mt="10px" mb="20px">
        <Flex direction={'row'} gap="7px" wrap={'wrap'}>
          {/*<List items={post.tags} renderItem={Tag} />*/}
        </Flex>
      </Card.Section>
      <Card.Section>
        <Flex
          justify={'space-between'}
          m="auto 10px"
          gap={'10px'}
          direction={{ base: 'column', sm: 'row', md: 'column', lg: 'row' }}
        >
          <Heading4 fw={600}>Дата публикации {post?.dateOfCreation}</Heading4>
          <Flex align="start" gap="md">
            <Flex align="center" gap="xs" style={{ whiteSpace: 'nowrap' }}>
              <IconThumbUp size={35} />
              <Heading5 c="green" fz={{ base: '14px', xs: '17px' }}>
                {addSpacesToNumber(Number(post?.likes))}
              </Heading5>
            </Flex>

            <Flex align="center" gap="xs" style={{ whiteSpace: 'nowrap' }}>
              <IconThumbDown size={35} />
              <Heading5 c="red" fz={{ base: '14px', xs: '17px' }}>
                {addSpacesToNumber(Number(post?.dislikes))}
              </Heading5>
            </Flex>

            <Flex align="center" gap="xs" style={{ whiteSpace: 'nowrap' }}>
              <IconEye size={35} />
              <Heading5 c={skyBlueColor} fz={{ base: '14px', xs: '17px' }}>
                {addSpacesToNumber(Number(post?.views))}
              </Heading5>
            </Flex>
          </Flex>
        </Flex>
      </Card.Section>
      <Box w={'100%'} bg={greyColor} h={1} m={'15px -10px'} />
      <Card.Section>
        <Grid grow ml={55}>
          {post?.mediaFiles ? (
            post.mediaFiles.length > 0 &&
            post?.mediaFiles.map((item, index) => (
              <Card withBorder key={index} m={10}>
                <Flex align="center" justify="space-between">
                  <div>
                    {getFileTypeFromUrl(item.url) === 'image' && (
                      <img
                        src={item.url}
                        alt="uploaded"
                        width={'100%'}
                        style={{ maxWidth: '400px' }}
                      />
                    )}
                    {getFileTypeFromUrl(item.url) === 'video' && (
                      <video
                        src={item.url}
                        controls
                        width={'100%'}
                        style={{ maxWidth: '400px' }}
                      />
                    )}
                    {getFileTypeFromUrl(item.url) === 'audio' && (
                      <audio src={item.url} controls />
                    )}
                  </div>
                </Flex>
              </Card>
            ))
          ) : (
            <Heading5>Файлы не прикрепили</Heading5>
          )}
        </Grid>
      </Card.Section>
    </Card>
  );
};

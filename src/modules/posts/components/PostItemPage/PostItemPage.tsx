import { FC, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IChannel, IPost } from '@app-types';
import { useChannel, usePost } from '@hooks';
import { Card, Flex, Pagination, Text } from '@mantine/core';
import { ChannelPageChannelDescription } from '@modules/channel';
import { PostItem } from '@modules/posts/components/PostItem/PostItem.tsx';
import { BlueButton, CommonFrame, Heading2, List } from '@ui';
import { RichTextEditor } from '@mantine/tiptap';

export const PostItemPage: FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const postManager = usePost();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const test = async () => {
      setPost((await postManager.getPost(Number(id))) ?? null);
    };
    test();
  }, []);

  return (
    <Card
      radius="md"
      p="15px 0px" // для растяжения изображения на всю длину карточки
      bd="1px solid black"
      id={'RecommendationPost' + props.id}
      shadow="sm"
      style={{
        height: 'auto',
        width: '800px',
        flexShrink: 0,
        marginTop: 15,
      }}
    >
      <Flex // содержание|кнопка
        direction="column"
        justify="space-between"
        h="100%"
        style={{ alignItems: 'center' }}
      >
        <Flex
          gap="10px"
          w="100%"
          direction="column"
          style={{ alignItems: 'center' }}
        >
          <Heading2 lineClamp={2} ta="center" p="0px 20px">
            {props.title}
          </Heading2>

          <RichTextEditor editor={editor} w={700} bd={'white'}>
            <Text lineClamp={4}>
              <RichTextEditor.Content />
            </Text>
          </RichTextEditor>
        </Flex>
      </Flex>
    </Card>
  );
};

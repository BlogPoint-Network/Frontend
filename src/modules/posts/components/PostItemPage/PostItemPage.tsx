import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from '@app-types';
import { usePost } from '@hooks';
import { Card, Flex } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';
import TextAlign from '@tiptap/extension-text-align';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Heading2 } from '@ui';

export const PostItemPage: FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const postManager = usePost();
  const { channelId, postId } = useParams();

  useEffect(() => {
    const test = async () => {
      setPost(
        (await postManager.getPost(Number(postId), Number(channelId))) ?? null,
      );
    };
    test();
  }, []);
  const content = post?.content;
  console.log(content);
  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content,
  });

  return (
    <Card
      radius="md"
      p="15px 0px" // для растяжения изображения на всю длину карточки
      bd="1px solid black"
      id={'RecommendationPost' + post?.id}
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
          <Heading2 lineClamp={2} ta="center" p="0px 10px">
            {post?.title}
          </Heading2>

          <RichTextEditor editor={editor} w={700} bd={'white'}>
            <RichTextEditor.Content />
          </RichTextEditor>
        </Flex>
      </Flex>
    </Card>
  );
};

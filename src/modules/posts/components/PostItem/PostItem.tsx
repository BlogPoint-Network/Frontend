import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import { Card, Flex, Text } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';
import TextAlign from '@tiptap/extension-text-align';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BlueButton, Heading2 } from '@ui';

export const PostItem = (props: IPost) => {
  const content = props.content;
  const navigate = useNavigate();
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
        <BlueButton onClick={() => navigate(`/post/${props.id}`)}>
          Читать
        </BlueButton>
      </Flex>
    </Card>
  );
};

import { Card, Flex, Text } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';
import { IExamplePost } from '@modules/experementalTest';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BlueButton, Heading2 } from '@ui';

export const TextDisplay = (props: IExamplePost) => {
  const renderContent = (
    content: string,
    images: { id: string; src: string }[],
  ) => {
    let renderedContent = content;

    images.forEach(image => {
      const imgTag = `<img src="${image.src}" alt="${image.id}" style="max-width: 100%; height: auto;"/>`;
      renderedContent = renderedContent.replace(`<${image.id}>`, imgTag);
    });

    return renderedContent;
  };
  const processedContent = renderContent(props.content, props.images);

  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Image,
    ],
    content: processedContent,
  });

  const contentHtml = editor?.getHTML();

  return (
    <Card
      radius="md"
      p="15px 0px"
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
      <Flex
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

          <RichTextEditor editor={editor} w={700} bd={'white'} mb={20}>
            <Text lineClamp={4}>
              <RichTextEditor.Content />
            </Text>
          </RichTextEditor>
        </Flex>
        <BlueButton onClick={() => console.log(contentHtml)}>Читать</BlueButton>
      </Flex>
    </Card>
  );
};

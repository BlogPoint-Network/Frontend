import { Link } from '@mantine/tiptap';
import { RichTextEditor } from '@mantine/tiptap';
import { IExamplePost } from '@modules/experementalTest';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import FileHandler from '@tiptap-pro/extension-file-handler';
import { BlueButton } from '@ui';

interface ImageData {
  id: string;
  src: string;
}

// Функция для обработки HTML-контента
function transformHtmlWithImages(content: string): {
  transformedHtml: string;
  images: ImageData[];
} {
  let imageIndex = 1;
  const images: ImageData[] = [];

  const transformedHtml = content.replace(
    /<img\b[^>]*src=['"]([^'"]+)['"][^>]*>/g,
    (_, src) => {
      const imgId = `img${imageIndex}`;
      images.push({ id: imgId, src });
      imageIndex++;
      return `<${imgId}>`;
    },
  );

  return { transformedHtml, images };
}

export const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Image,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      FileHandler.configure({
        allowedMimeTypes: [
          'image/png',
          'image/jpeg',
          'image/gif',
          'image/webp',
        ],
        onDrop: (currentEditor, files, pos) => {
          files.forEach(file => {
            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(pos, {
                  type: 'image',
                  attrs: {
                    src: fileReader.result,
                  },
                })
                .focus()
                .run();
            };
          });
        },
      }),
    ],
  });

  const handleClick = () => {
    const contentHtml = editor?.getHTML() || '';
    const { transformedHtml, images } = transformHtmlWithImages(contentHtml);

    const experementalPost: IExamplePost = {
      id: '',
      channelId: '',
      title: '',
      content: transformedHtml,
      images,
      tags: [],
    };

    console.log(experementalPost);
  };

  return (
    <>
      <div style={{ margin: '15px 0 15px 0', width: '70%' }}>
        <RichTextEditor editor={editor}>
          <RichTextEditor.Toolbar sticky stickyOffset={60}>
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>

          <RichTextEditor.Content />
        </RichTextEditor>
      </div>

      <BlueButton onClick={handleClick}>Показать</BlueButton>
    </>
  );
};

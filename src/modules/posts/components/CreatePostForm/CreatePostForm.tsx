import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '@hooks/usePost.ts';
import { Input, MultiSelect, TextInput } from '@mantine/core';
import { Link } from '@mantine/tiptap';
import { RichTextEditor } from '@mantine/tiptap';
import { tags } from '@modules/posts';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import FileHandler from '@tiptap-pro/extension-file-handler';
import { BlueButton, FormBox } from '@ui';

export const CreatePostForm = () => {
  const postManager = usePost();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [selectTags, setSelectTags] = useState<string[]>([]);

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
        onPaste: (currentEditor, files, htmlContent) => {
          files.forEach(file => {
            if (htmlContent) {
              console.log(htmlContent);
              return false;
            }

            const fileReader = new FileReader();

            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
              currentEditor
                .chain()
                .insertContentAt(currentEditor.state.selection.anchor, {
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
  const contentHtml = editor?.getHTML();
  return (
    <>
      <FormBox>
        <h1>Создание поста</h1>
        <div style={{ margin: '15px 0 15px 0' }}>
          <Input.Wrapper label="Название поста" size="lg" withAsterisk>
            <TextInput
              value={title}
              onChange={event => {
                setTitle(event.currentTarget.value);
              }}
            />
          </Input.Wrapper>
        </div>
        <div style={{ margin: '15px 0 15px 0' }}>
          <Input.Wrapper label="Содержание поста" size="lg" withAsterisk>
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
          </Input.Wrapper>
        </div>
        <div style={{ margin: '15px 0 15px 0' }}>
          <MultiSelect
            placeholder="Выберете от 1 до 5 тегов"
            data={tags}
            maxValues={5}
            minLength={1}
            value={selectTags}
            onChange={setSelectTags}
          />
        </div>

        <BlueButton
          onClick={() =>
            id && contentHtml
              ? postManager.createPost(id, title, contentHtml).then(() => {
                  console.log(contentHtml);
                })
              : console.log('Не найден id')
          }
        >
          Опубликовать
        </BlueButton>
      </FormBox>
    </>
  );
};

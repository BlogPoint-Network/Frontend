import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '@hooks/usePost.ts';
import { Input, TextInput } from '@mantine/core';
import { Link } from '@mantine/tiptap';
import { RichTextEditor } from '@mantine/tiptap';
import Highlight from '@tiptap/extension-highlight';
import SubScript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { BlueButton, FormBox } from '@ui';

export const CreatePostForm = () => {
  const postManager = usePost();
  const { id } = useParams();
  const [title, setTitle] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
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

        <BlueButton
          onClick={() =>
            id && contentHtml
              ? postManager.createPost(id, title, contentHtml)
              : console.log('Не найден id')
          }
        >
          Опубликовать
        </BlueButton>
      </FormBox>
    </>
  );
};

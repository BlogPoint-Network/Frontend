import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from '@hooks/usePost.ts';
import { Input, TextInput } from '@mantine/core';
import { BlueButton, FormBox } from '@ui';

export const CreatePostForm = () => {
  const postManager = usePost();
  const { id } = useParams();
  const [title, setTitle] = useState('');

  // const editor = useEditor({
  //   extensions: [
  //     StarterKit,
  //     Underline,
  //     Link,
  //     Image,
  //     Superscript,
  //     SubScript,
  //     Highlight,
  //     TextAlign.configure({ types: ['heading', 'paragraph'] }),
  //     FileHandler.configure({
  //       allowedMimeTypes: [
  //         'image/png',
  //         'image/jpeg',
  //         'image/gif',
  //         'image/webp',
  //       ],
  //       onDrop: (currentEditor, files, pos) => {
  //         files.forEach(file => {
  //           const fileReader = new FileReader();
  //
  //           fileReader.readAsDataURL(file);
  //           fileReader.onload = () => {
  //             currentEditor
  //               .chain()
  //               .insertContentAt(pos, {
  //                 type: 'image',
  //                 attrs: {
  //                   src: fileReader.result,
  //                 },
  //               })
  //               .focus()
  //               .run();
  //           };
  //         });
  //       },
  //       onPaste: (currentEditor, files, htmlContent) => {
  //         files.forEach(file => {
  //           if (htmlContent) {
  //             // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
  //             // you could extract the pasted file from this url string and upload it to a server for example
  //             console.log(htmlContent);
  //             return false;
  //           }
  //
  //           const fileReader = new FileReader();
  //
  //           fileReader.readAsDataURL(file);
  //           fileReader.onload = () => {
  //             currentEditor
  //               .chain()
  //               .insertContentAt(currentEditor.state.selection.anchor, {
  //                 type: 'image',
  //                 attrs: {
  //                   src: fileReader.result,
  //                 },
  //               })
  //               .focus()
  //               .run();
  //           };
  //         });
  //       },
  //     }),
  //   ],
  // });
  // const contentHtml = editor?.getHTML();
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
            {/*<RichTextEditor editor={editor}>*/}
            {/*  <RichTextEditor.Toolbar sticky stickyOffset={60}>*/}
            {/*    <RichTextEditor.ControlsGroup>*/}
            {/*      <RichTextEditor.Bold />*/}
            {/*      <RichTextEditor.Italic />*/}
            {/*      <RichTextEditor.Underline />*/}
            {/*    </RichTextEditor.ControlsGroup>*/}

            {/*    <RichTextEditor.ControlsGroup>*/}
            {/*      <RichTextEditor.H1 />*/}
            {/*      <RichTextEditor.H2 />*/}
            {/*      <RichTextEditor.H3 />*/}
            {/*    </RichTextEditor.ControlsGroup>*/}

            {/*    <RichTextEditor.ControlsGroup>*/}
            {/*      <RichTextEditor.Blockquote />*/}
            {/*      <RichTextEditor.Hr />*/}
            {/*      <RichTextEditor.BulletList />*/}
            {/*      <RichTextEditor.OrderedList />*/}
            {/*    </RichTextEditor.ControlsGroup>*/}

            {/*    <RichTextEditor.ControlsGroup>*/}
            {/*      <RichTextEditor.AlignLeft />*/}
            {/*      <RichTextEditor.AlignCenter />*/}
            {/*      <RichTextEditor.AlignJustify />*/}
            {/*      <RichTextEditor.AlignRight />*/}
            {/*    </RichTextEditor.ControlsGroup>*/}

            {/*    <RichTextEditor.ControlsGroup>*/}
            {/*      <RichTextEditor.Undo />*/}
            {/*      <RichTextEditor.Redo />*/}
            {/*    </RichTextEditor.ControlsGroup>*/}
            {/*  </RichTextEditor.Toolbar>*/}

            {/*  <RichTextEditor.Content />*/}
            {/*</RichTextEditor>*/}
          </Input.Wrapper>
        </div>

        <BlueButton
        // onClick={() =>
        //   id && contentHtml
        //     ? postManager.createPost(id, title, contentHtml).then(() => {
        //         console.log(contentHtml);
        //       })
        //     : console.log('Не найден id')
        // }
        >
          Опубликовать
        </BlueButton>
      </FormBox>
    </>
  );
};

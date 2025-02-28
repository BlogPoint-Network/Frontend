import { examplePosts } from '@modules/experementalTest';
import { TextDisplay } from '@modules/experementalTest/components/TextDisplay.tsx';
import { TextEditor } from '@modules/experementalTest/components/TextEditor.tsx';

export const ForTest = () => {
  const postView = examplePosts[0];

  return (
    <>
      <h2>Текстовый редактор</h2>
      <div>
        <TextEditor />
      </div>
      <h2>Текстовый отображатель</h2>
      <div>
        <TextDisplay
          id={postView.id}
          channelId={postView.channelId}
          title={postView.title}
          content={postView.content}
          images={postView.images}
          tags={postView.tags}
        />
      </div>
    </>
  );
};

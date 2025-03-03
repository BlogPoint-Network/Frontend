import { examplePosts } from '@modules/experementalTest';
import { PostDisplayNewHook } from '@modules/experementalTest/components/PostDisplayNewHook.tsx';
import { TextDisplay } from '@modules/experementalTest/components/TextDisplay.tsx';
import { TextEditor } from '@modules/experementalTest/components/TextEditor.tsx';
import { usePostById } from '@modules/posts/hooks/usePostById.ts';

export const ForTest = () => {
  const postView = examplePosts[0];
  const displayPost = usePostById(1, 1);

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
      <div>
        <h2>Вывод поста с новым hook</h2>
        <PostDisplayNewHook
          postId={displayPost.data?.data.postId ?? '101'}
          channelId={displayPost.data?.data.channelId ?? '101'}
          title={displayPost.data?.data.title ?? 'Привет'}
          content={displayPost.data?.data.content ?? 'Контент'}
          images={displayPost.data?.data.images ?? []}
          tags={displayPost.data?.data.tags ?? []}
        />
      </div>
    </>
  );
};

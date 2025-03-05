import { examplePosts } from '@modules/experementalTest';
import { PostDisplayNewHook } from '@modules/experementalTest/components/PostDisplayNewHook.tsx';
import { TextDisplay } from '@modules/experementalTest/components/TextDisplay.tsx';
import { TextEditor } from '@modules/experementalTest/components/TextEditor.tsx';
import { usePostById } from '@modules/posts/hooks/usePostById.ts';
import { usePosts } from '@modules/posts/hooks/usePosts.ts';
import { List } from '@ui';

export const ForTest = () => {
  const postView = examplePosts[0];
  const displayPost = usePostById(2, 1);
  const displayPosts = usePosts(1, 1);

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
          id={displayPost.data?.data.id ?? ''}
          channelId={displayPost.data?.data.channelId ?? ''}
          title={displayPost.data?.data.title ?? ''}
          content={displayPost.data?.data.content ?? ''}
          images={displayPost.data?.data.images ?? []}
          tags={displayPost.data?.data.tags ?? []}
        />
      </div>
      <div>
        <h2>Несколько постов</h2>
        <List items={displayPosts.data?.data ?? []} renderItem={PostDisplayNewHook} />
      </div>
      <div>
        <h2>Проверка профиля</h2>
      </div>
    </>
  );
};


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDAxMzcwOTksImlzcyI6IjEifQ.5BvYApkA-cw-D3Bh_-dMgA8UQrSrz-IFrB1AiL_zJyg
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDExOTIzODMsImlzcyI6IjQifQ.PWyT_UwV_fCA6jNiUGbs2fZw2GRGUtwvuisw9U8V2m4

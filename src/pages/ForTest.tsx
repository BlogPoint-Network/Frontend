import { PostExample } from '@modules/experementalTest';
import { examplePost, PostItem, PostItemPage } from '@modules/posts';
import { ChannelItemPage } from '@modules/channel';

export const ForTest = () => {
  return (
    <>
      <h2>Страница для тестов</h2>
      <PostItemPage />
      <PostItem post={examplePost} />
    </>
  );
};

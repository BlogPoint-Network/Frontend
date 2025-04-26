import { PostExample } from '@modules/experementalTest';
import { examplePost } from '@modules/posts';

export const ForTest = () => {
  return (
    <>
      <h2>Страница для тестов</h2>
      <PostExample post={examplePost} />
    </>
  );
};

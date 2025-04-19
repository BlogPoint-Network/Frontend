import { IPost } from '@app-types';
import { PostItem, PostItemPage } from '@modules/posts';

export const ForTest = () => {
  const newExamplePost: IPost = {
    id: '1',
    channelId: '1',
    channelName: 'Путешествия и путешествия',
    channelIcon: {
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'https://cdn4.iconfinder.com/data/icons/business-conceptual-part1-1/513/business-1024.png',
    },
    previewImage: {
      filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      url: 'https://avatars.mds.yandex.net/i?id=b4362a1150fd6527d7035e79f8e9715e_l-5252229-images-thumbs&n=13',
    },
    title: 'Отправьтесь в путешествие уже сейчас!',
    content:
      `<p>Мы вышли в откртытое море <b>незабываемые путешествия</b> по разным уголкам мира! ` +
      `Мы покажем экзотические страны, <h1>уникальные</h1> места и невероятные истории ` +
      `из наших поездок.</p>`,
    contentImages: [
      {
        name: 'img1',
        filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
        url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      },
    ],
    tags: [
      { id: 44, category_id: 6, name: 'КомпьютерныеИгры', color: 'red' },
      { id: 51, category_id: 6, name: 'Киберспорт', color: 'red' },
      { id: 52, category_id: 6, name: 'Стриминг', color: 'red' },
      { id: 45, category_id: 6, name: 'СоревновательныеИгры', color: 'red' },
    ],
    mediaFiles: [
      {
        filename: 'image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
        url: 'http://localhost:9000/blogpoint-bucket/image/141b214a-4048-4131-b734-fa99afb42e62.jpg',
      },
    ],
    dateOfCreation: '15:00',
    likes: 450200,
    dislikes: 18000,
    views: 1352345,
  };

  return (
    <>
      <h2>Тест страниц постов</h2>
      <PostItemPage />
      <PostItem
        id={newExamplePost.id}
        channelId={newExamplePost.channelId}
        channelName={newExamplePost.channelName}
        channelIcon={newExamplePost.channelIcon}
        previewImage={newExamplePost.previewImage}
        title={newExamplePost.title}
        content={newExamplePost.content}
        contentImages={newExamplePost.contentImages}
        tags={newExamplePost.tags}
        mediaFiles={newExamplePost.mediaFiles}
        dateOfCreation={newExamplePost.dateOfCreation}
        likes={newExamplePost.likes}
        dislikes={newExamplePost.dislikes}
        views={newExamplePost.views}
      />
    </>
  );
};

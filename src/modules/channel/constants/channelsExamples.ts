import { IChannel } from '@app-types';

export const channelsExamples: IChannel[] = [
  {
    id: 1,
    ownerId: 1,
    name: 'Путешествия и путешествия и снова путешествия',
    category: 'Туризм и путешествия',
    categoryColor: '#14c761',
    description: 'Туры в Киргизию и Таджикистан!',
    subsCount: 917021,
    imageURL: '/src/app/assets/images/post/post_image_tall.jpg',
  },
  {
    id: 2,
    ownerId: 1,
    name: 'Технологии и гаджеты',
    category: 'IT и инновации',
    categoryColor: '#12a193',
    description:
      'Последние новинки мира технологий, обзоры гаджетов, советы по использованию и сравнительные тесты – всё это вы найдете на нашем канале.',
    subsCount: 61879,
    imageURL: '/src/app/assets/images/post/post_image_wide.jpg',
  },
];

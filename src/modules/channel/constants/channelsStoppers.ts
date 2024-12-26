interface IPopularChannels {
  id: number;
  ownerId: number;
  name: string;
  description: string;
  subsCount: number;
  imageURL?: string | null;
}

export const channels: IPopularChannels[] = [
  {
    id: 1,
    ownerId: 1,
    name: 'Путешествия и путешествия и снова путешествия',
    description:
      'Отправьтесь с нами в незабываемые путешествия по разным уголкам мира! Мы покажем экзотические страны, уникальные места и невероятные истории из наших поездок. Вдохновляйтесь на новые открытия, узнайте о полезных лайфхаках для путешествий и погружайтесь в культуру разных стран!',
    subsCount: 917021,
    imageURL: '/src/app/assets/images/post/post_image_tall.jpg',
  },
  {
    id: 2,
    ownerId: 1,
    name: 'Технологии и гаджеты',
    description:
      'Последние новинки мира технологий, обзоры гаджетов, советы по использованию и сравнительные тесты – всё это вы найдете на нашем канале.',
    subsCount: 61879,
    imageURL: '/src/app/assets/images/post/post_image_wide.jpg',
  },
];

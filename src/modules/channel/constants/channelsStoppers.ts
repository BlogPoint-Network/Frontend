interface IPopularChannels {
  id: number;
  channelName: string;
  description: string;
  subscriberNumber: number;
  imageURL?: string | undefined;
}

export const channels: IPopularChannels[] = [
  {
    id: 1,
    channelName: 'Путешествия и путешествия и снова путешествия',
    description:
      'Отправьтесь с нами в незабываемые путешествия по разным уголкам мира! Мы покажем экзотические страны, уникальные места и невероятные истории из наших поездок. Вдохновляйтесь на новые открытия, узнайте о полезных лайфхаках для путешествий и погружайтесь в культуру разных стран!',
    subscriberNumber: 917021,
    imageURL: 'assets/images/post/post_image_tall.jpg',
  },
  {
    id: 2,
    channelName: 'Технологии и гаджеты',
    description:
      'Последние новинки мира технологий, обзоры гаджетов, советы по использованию и сравнительные тесты – всё это вы найдете на нашем канале.',
    subscriberNumber: 61879,
    imageURL: 'assets/images/post/post_image_usual.webp',
  },
];

interface IPopularChannels {
  id: number;
  channelName: string;
  description: string;
  subscriberNumber: number;
  imageURL?: string | undefined;
}

export const popularChannels: IPopularChannels[] = [
  {
    id: 1,
    channelName: 'Путешествия и путешествия и снова путешествия',
    description:
      'Отправьтесь с нами в незабываемые путешествия по разным уголкам мира!!',
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
  {
    id: 3,
    channelName: 'Мир моды',
    description:
      'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    subscriberNumber: 5000004,
    imageURL: 'assets/images/post/post_image_wide.jpg',
  },
  {
    id: 4,
    channelName: 'CyberSport',
    description:
      'Мы окунем вас в мир видеоигр и киберспорта! Новости игровой индустрии, прохождения, обзоры новинок',
    subscriberNumber: 1078,
  },
  {
    id: 5,
    channelName:
      'Научное сообщество Научное сообщество Научное сообщество Научное сообщество',
    description:
      'Погружайтесь в удивительный мир науки, где каждое открытие — это шаг к разгадке тайн вселенной и человеческого сознания!',
    subscriberNumber: 8,
    imageURL: 'https://www.google.com/',
  },
];

interface IReccomendations {
  id: number;
  title: string;
  text: string;
  channelName: string;
  mediaType?: string | undefined;
  mediaURL?: string | undefined;
}

export const recommendations: IReccomendations[] = [
  {
    id: 1,
    title:
      'Отправьтесь в путешествие уже сейчас! Отправьтесь в путешествие уже сейчас! Отправьтесь в путешествие уже сейчас!',
    text: 'Отправьтесь с нами в незабываемые путешествия по разным уголкам мира! Мы покажем экзотические страны, уникальные места и невероятные истории из наших поездок.',
    channelName: 'Путешествия и путешествия и снова путешествия',
    mediaType: 'image',
    mediaURL:
      'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png',
  },
  {
    id: 2,
    title: 'Вышла новая игра',
    text: 'Скачать бесплатно без смс и регистрации можно в канале',
    channelName: 'CyberSport',
    mediaType: 'video',
    mediaURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    title: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    text: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    channelName: 'Мир моды',
    mediaType: 'asdasdasdasdads',
  },
  {
    id: 4,
    title: 'Ничего интересного',
    text: '---',
    channelName:
      'Научное сообщество Научное сообщество Научное сообщество Научное сообщество',
    mediaType: 'image',
    mediaURL: 'https://',
  },
  {
    id: 5,
    title: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    text: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!',
    channelName: 'Мир моды',
    mediaType: 'asdasdasdasdads',
    mediaURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

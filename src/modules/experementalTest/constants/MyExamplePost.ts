export interface IImage {
  id: string;
  src: string;
}

export interface IExamplePost {
  id: string;
  channelId: string;
  title: string;
  content: string;
  images: IImage[];
  tags: string[];
}

export const examplePosts: IExamplePost[] = [
  {
    id: '1233',
    channelId: '12345',
    title: 'Про тесты компов',
    images: [
      {
        id: 'img1',
        src: `/assets/images/EmptyPng.png`,
      },
      {
        id: 'img2',
        src: '/assets/images/EmptyPng.png',
      },
    ],
    content: `<img1><img2><p>Привет</p>`,
    tags: ['#ЧИЛЛЛ', '#КАЙФ', '#ИГРАТЬ'],
  },
];

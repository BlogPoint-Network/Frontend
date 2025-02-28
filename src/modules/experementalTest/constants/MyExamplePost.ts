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
    images: [],
    content: ``,
    tags: ['#ЧИЛЛЛ', '#КАЙФ', '#ИГРАТЬ'],
  },
];

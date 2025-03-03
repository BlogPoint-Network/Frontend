export interface IImage {
  id: string;
  src: string;
}

export interface IPost {
  postId: string;
  channelId: string;
  title: string;
  content: string;
  images: IImage[];
  tags: string[];
}

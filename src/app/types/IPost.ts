import { IImage } from '@app-types/IImage.ts';
import { ITag } from '@app-types/ITag.ts';

export interface IPost {
  id: number;
  channelId: number;
  channelName: string;
  channelIcon: string;
  previewImage: string;
  tagList: ITag[];
  title: string;
  content: string;
  images: IImage[];
  dateOfCreation: string;
  likes: number;
  dislikes: number;
  views: number;
}

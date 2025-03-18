import { ITag } from '@app-types/ITag.ts';

export interface IPost {
  id: number;
  channelId: number;
  channelName: string;
  channelIcon: string;
  tagList: ITag[];
  title: string;
  content: string;
  time: string;
  likes: number;
  dislikes: number;
  views: number;
}

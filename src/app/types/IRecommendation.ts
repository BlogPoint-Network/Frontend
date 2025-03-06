import { ITag } from '@app-types/ITag.ts';

export interface IRecommendation {
  id: number;
  channelName: string;
  channelIcon: string;
  mediaType: string[];
  mediaURL: string[];
  tagList: ITag[];
  title: string;
  text: string;
  time: string;
  likes: number;
  dislikes: number;
  views: number;
}

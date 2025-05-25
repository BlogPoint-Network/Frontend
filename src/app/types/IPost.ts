import { IMedia, ITag } from '@app-types';

export interface IPost {
  id: number;
  channelId: string;
  channelName: string;
  channelIcon: IMedia;
  previewImage: IMedia;
  title: string;
  content: string;
  contentImages: IMedia[];
  tags: ITag[];
  mediaFiles: IMedia[];
  createdAt: string;
  likesCount: number;
  dislikesCount: number;
  views: number;
}

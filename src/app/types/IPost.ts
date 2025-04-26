import { IMedia, ITag } from '@app-types';

export interface IPost {
  id: string;
  channelId: string;
  channelName: string;
  channelIcon: IMedia;
  previewImage: IMedia;
  title: string;
  content: string;
  contentImages: IMedia[];
  tags: ITag[];
  mediaFiles: IMedia[];
  dateOfCreation: string;
  likes: number;
  dislikes: number;
  views: number;
}

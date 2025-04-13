import { ICategory } from '@app-types/ICategory.ts';

export interface IChannel {
  id: number;
  name: string;
  category: ICategory;
  description: string;
  ownerId: number;
  subsCount: number;
  imageLogo: string | null;
  imageBanner: string | null;
  imageURL?: string | null;
}

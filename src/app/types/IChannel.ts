export interface IChannel {
  id: number;
  name: string;
  category: string;
  categoryColor: string;
  description: string;
  ownerId: number;
  subsCount: number;
  imageURL?: string | null;
}

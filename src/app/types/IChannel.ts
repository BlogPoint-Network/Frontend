export interface IChannel {
  id: number;
  name: string;
  description: string;
  ownerId: number;
  subsCount: number;
  imageURL?: string | null;
}

export interface IUser {
  id: string;
  role_id: string;
  email: string;
  login: string;
  password: string;
  subscribeChannels: [{ name: string; id: string }] | null;
  myOwnChannels: [{ name: string; id: string }] | null;
}

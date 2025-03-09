import { Unauthorized } from '@components/Other/Unauthorized.tsx';
import {
  ForTest,
  Login,
  MainPage,
  Profile,
  Register,
  SubscribeChannels,
  UserChannels,
} from '@pages';
import CreateChannel from '@pages/CreateChannel.tsx';
import PopularChannels from '@pages/PopularChannels.tsx';
import RatingOfChannels from '@pages/RatingOfChannels.tsx';
import Recommendations from '@pages/Recommendations.tsx';

import { ChannelItemPage } from '../../modules/channel';

export const privateRoutes = [
  { path: '/profile', component: Profile, exact: true },
  { path: '/channels-subscribe', component: SubscribeChannels, exact: true },
  { path: '/UserChannels', component: UserChannels, exact: true },
  { path: '/ChannelPage', component: ChannelItemPage, exact: true },
  { path: '/createChannel', component: CreateChannel, exact: true },
  { path: '/Unauthorised', component: Unauthorized, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
  { path: '/register', component: Register, exact: true },
  { path: '/', component: MainPage, exact: true },
  { path: '/Test', component: ForTest, exact: true },
  { path: '/popular-channels', component: PopularChannels, exact: true },
  { path: '/recommendations', component: Recommendations, exact: true },
  { path: '/rating-of-channels', component: RatingOfChannels, exact: true },
];

import { Unauthorized } from '@components/Other/Unauthorized.tsx';
import {
  ChannelsSubscribe,
  ForTest,
  Login,
  MainPage,
  MyChannel,
  MyChannels,
  Profile,
  Register,
} from '@pages';
import CreateChannel from '@pages/CreateChannel.tsx';
import PopularChannels from '@pages/PopularChannels.tsx';
import RatingOfChannels from '@pages/RatingOfChannels.tsx';
import Recommendations from '@pages/Recommendations.tsx';

export const privateRoutes = [
  { path: '/profile', component: Profile, exact: true },
  { path: '/channels-subscribe', component: ChannelsSubscribe, exact: true },
  { path: '/MyChannels', component: MyChannels, exact: true },
  { path: '/MyChannel', component: MyChannel, exact: true },
  { path: '/createChannel', component: CreateChannel, exact: true },
  { path: '/Unauthorised', component: Unauthorized, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: Login, exact: true },
  { path: '/register', component: Register, exact: true },
  { path: '/', component: MainPage, exact: true },
  { path: '/for-test', component: ForTest, exact: true },
  { path: '/popular-channels', component: PopularChannels, exact: true },
  { path: '/recommendations', component: Recommendations, exact: true },
  { path: '/rating-of-channels', component: RatingOfChannels, exact: true },
];

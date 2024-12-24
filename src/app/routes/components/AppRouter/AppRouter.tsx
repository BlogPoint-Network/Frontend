import { Route, Routes } from 'react-router-dom';
import { Unauthorized } from '@components/Other/Unauthorized.tsx';
import { CreatePostForm } from '@modules/posts/components/CreatePostForm/CreatePostForm.tsx';
import { MyChannelsExample } from '@modules/posts/components/MyChannelsExample.tsx';
import {
  ChannelPage,
  ForTest,
  Login,
  MainPage,
  Profile,
  Register, SubscribeChannels,
  UserChannels,
} from '@pages';
import CreateChannel from '@pages/CreateChannel.tsx';
import PopularChannels from '@pages/PopularChannels.tsx';
import RatingOfChannels from '@pages/RatingOfChannels.tsx';
import Recommendations from '@pages/Recommendations.tsx';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/test" element={<ForTest />} />
      <Route path="/create-channel" element={<CreateChannel />} />
      <Route path="/channels/:id" element={<ChannelPage />} />
      <Route path="/user-channels" element={<UserChannels />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/popular-channels" element={<PopularChannels />} />
      <Route path="/rating-of-channels" element={<RatingOfChannels />} />
      <Route path="/recommendations" element={<Recommendations />} />
      <Route path="/channel-subscribe" element={<SubscribeChannels />} />
      <Route path="/create-post" element={<CreatePostForm />} />
      <Route path="/my-channel-example" element={<MyChannelsExample />} />
    </Routes>
  );
};

export default AppRouter;

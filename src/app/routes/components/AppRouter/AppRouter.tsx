import { Route, Routes } from 'react-router-dom';
import { ForTest, Login, Profile, Register } from '@pages';
import ChannelsSubscribe from '@pages/ChannelsSubscribe.tsx';
import CreateChannel from '@pages/CreateChannel.tsx';
import MainPage from '@pages/MainPage.tsx';
import MyChannel from '@pages/MyChannel.tsx';
import PopularChannels from '@pages/PopularChannels.tsx';
import RatingOfChannels from '@pages/RatingOfChannels.tsx';
import Recommendations from '@pages/Recommendations.tsx';
import { ProfileLoader } from '@routes/components/ProfileLoader/ProfileLoader.tsx';
import { CreatePostForm } from '@modules/posts/components/CreatePostForm/CreatePostForm.tsx';
import {
  MyChannelsExample
} from '@modules/posts/components/MyChannelsExample.tsx';

const AppRouter = () => {
  return (
    <ProfileLoader>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<ForTest />} />
        <Route path="/create-channel" element={<CreateChannel />} />
        <Route path="/my-channel" element={<MyChannel />} />
        <Route path="/popularchannels" element={<PopularChannels />} />
        <Route path="/ratingofchannels" element={<RatingOfChannels />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/channelsubscribe" element={<ChannelsSubscribe />} />
        <Route path="/create-post" element={<CreatePostForm />} />
        <Route path="/my-channel-example" element={<MyChannelsExample />} />
      </Routes>
    </ProfileLoader>
  );
};

export default AppRouter;

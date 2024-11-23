import {
  CommonFrame,
  MainPageLogoContainer,
  MainPagePopularChannelsContainer,
  MainPageRecommendationPostsContainer,
} from '@modules/channel';
import { Line } from '@ui/Line';

const MainPage = () => {
  return (
    <CommonFrame>
      <MainPageLogoContainer />
      <MainPageRecommendationPostsContainer />
      <Line height="8px" />
      <MainPagePopularChannelsContainer />
    </CommonFrame>
  );
};

export default MainPage;

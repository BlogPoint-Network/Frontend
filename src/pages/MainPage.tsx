import {
  CommonFrame,
  MainPageLogoContainer,
  MainPagePopularChannelsContainer,
  MainPageRecommendationPostsContainer,
} from '@modules/channel';
import { Line } from '@ui';

const MainPage = () => {
  return (
    <>
      <CommonFrame>
        <MainPageLogoContainer />
        <MainPageRecommendationPostsContainer />
      </CommonFrame>
      <Line h="5px" />
      <CommonFrame>
        <MainPagePopularChannelsContainer />
      </CommonFrame>
    </>
  );
};

export default MainPage;

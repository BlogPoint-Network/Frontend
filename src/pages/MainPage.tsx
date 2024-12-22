import {
  CommonFrame,
  MainPagePopularChannelsContainer,
  MainPageRecommendationPostsContainer,
} from '@modules/channel';
import { LogoMainPage } from '@ui';

export const MainPage = () => {
  return (
    <>
      <CommonFrame>
        <LogoMainPage />
        <MainPageRecommendationPostsContainer />
      </CommonFrame>
      {/*<Line h="3px" />*/}
      <CommonFrame>
        <MainPagePopularChannelsContainer />
      </CommonFrame>
    </>
  );
};

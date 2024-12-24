import { MainPagePopularChannelsContainer } from '@modules/channel';
import { MainPageRecommendationPostsContainer } from '@modules/mainpage/MainPageRecommendationPostsContainer/MainPageRecommendationPostsContainer.tsx';
import { CommonFrame, LogoMainPage } from '@ui';

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

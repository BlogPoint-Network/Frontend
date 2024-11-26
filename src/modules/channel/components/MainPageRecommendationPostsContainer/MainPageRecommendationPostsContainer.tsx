import { darkBackgroundColor, skyBlueColor } from '@constants';
import { Carousel } from '@mantine/carousel';
import { Container } from '@mantine/core';
import RecommendationPost from '@modules/channel/components/RecommendationPost/RecommendationPost.tsx';
import { recommendations } from '@modules/channel/constants/stoppers.ts';

export const MainPageRecommendationPostsContainer = () => {
  return (
    <Container id="RecommendationPostsContainer">
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span style={{ fontSize: '48px', fontWeight: 600 }}>Рекомендации</span>
      </div>
      <Carousel
        id="recommendationFeed"
        withIndicators
        slideSize="33.333333%"
        slideGap="40px"
        loop
        controlSize="50"
        style={{
          border: `3px solid ${darkBackgroundColor}`, // Цвет границы
          borderRadius: '4px', // Скругление для контролов
        }}
        styles={{
          control: {
            backgroundColor: skyBlueColor,
            color: 'white',
            transform: 'translateY(-50%)', // позиционирует стрелки по центру по вертикали
            zIndex: 10, // Выводит стрелки поверх слайдов
          },
          controls: {
            top: '50%',
            left: 'calc(-100px)', // сдвигает левую стрелку за пределы карусели
            right: 'calc(-100px)', // сдвигает правую стрелку за пределы карусели
          },
          indicator: {
            backgroundColor: skyBlueColor,
            width: '30px',
            height: '10px',
            transition: 'width 250ms ease',
          },
          indicators: {
            position: 'relative', // Делает индикаторы отдельным блоком
            top: '20px', // Добавляет отступ сверху
          },
        }}
      >
        {recommendations.map(el => (
          <Carousel.Slide key={el.id}>
            <RecommendationPost
              id={el.id}
              title={el.title}
              text={el.text}
              channelName={el.channelName}
              mediaType={el.mediaType}
              mediaURL={el.mediaURL}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </Container>
  );
};

import { skyBlueColor } from '@constants';
import { Carousel } from '@mantine/carousel';
import RecommendationPost from '@modules/channel/components/RecommendationPost/RecommendationPost.tsx';
import { recommendations } from '@modules/channel/constants/recomendationStoppers.ts';

export const RecommendationPostsContainer = () => {
  return (
    <Carousel
      id="recommendationFeed"
      slideSize={{ md: '33%', base: '100%' }}
      w={{ md: '1200px', base: '380px' }} // выравнивание по центру
      slideGap={{ base: 0, sm: 'md' }}
      ml={{ xl: '-130px', lg: '0px', md: '60px', sm: '0px', base: '0px' }}
      withIndicators
      loop
      controlSize="50"
      styles={{
        control: {
          backgroundColor: skyBlueColor,
          color: 'white',
          transform: 'translateY(-50%)', // позиционирует стрелки по центру по вертикали
          zIndex: 10, // Выводит стрелки поверх слайдов
        },
        controls: {
          top: '50%',
          left: 'calc(-90px)', // сдвигает левую стрелку за пределы карусели
          right: 'calc(-90px)', // сдвигает правую стрелку за пределы карусели
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
  );
};

import { darkBackgroundColor, skyBlueColor } from '@constants';
import { Card, Flex, Text } from '@mantine/core';
import PostMedia from '@modules/channel/components/PostMedia/PostMedia.tsx';
import { Button, Heading2, Heading3, Heading4 } from '@ui';

interface RecommendationPostProps {
  id: number;
  title: string;
  text: string;
  channelName: string;
  mediaType?: string | undefined; // тип указан неточно, изменить
  mediaURL?: string | undefined;
}

function RecommendationPost(props: RecommendationPostProps): JSX.Element {
  return (
    <Card
      radius="md"
      p="15px 0px" // для растяжения изображения на всю длину карточки
      bd="1px solid black"
      id={'RecommendationPost' + props.id}
      style={{
        height: '550px',
        width: '380px',
        flexShrink: 0,
      }}
    >
      <Flex // содержание|кнопка
        direction="column"
        justify="space-between"
        h="100%"
        style={{ alignItems: 'center' }}
      >
        <Flex
          gap="10px"
          w="100%"
          direction="column"
          style={{ alignItems: 'center' }}
        >
          <Heading2 lineClamp={2} ta="center" p="0px 20px">
            {props.title}
          </Heading2>

          <Card.Section
            style={{ background: darkBackgroundColor, width: '100%' }}
          >
            {/*проверка на пустые поля*/}
            {props.mediaType && props.mediaURL ? (
              <PostMedia
                // уникальный ключ для каждого медиа
                id={`RecommendationPost${props.id}Media`}
                // если на этом шаге, значит массивы уже не пустые
                mediaType={props.mediaType!}
                mediaURL={props.mediaURL!}
              />
            ) : (
              <hr style={{ backgroundColor: 'white', height: '140px' }} />
            )}
          </Card.Section>

          <Heading3
            lineClamp={1}
            ta="center"
            p="0 20px"
            fw="bold"
            td="underline"
          >
            {props.channelName}
          </Heading3>

          <Heading4 lineClamp={3} ta="center" p="0 20px">
            {props.title}
          </Heading4>
        </Flex>

        <Button color={skyBlueColor}>
          <Text size={'lg'}>Читать</Text>
        </Button>
      </Flex>
    </Card>
  );
}

export default RecommendationPost;

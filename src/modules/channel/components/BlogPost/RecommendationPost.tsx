import { Card, Text, Button, Flex} from '@mantine/core';
import PostMedia from "./PostMedia";
import {styleBlueButton} from "../../../../styles/styles";
import {darkBackgroundColor} from "../../constants";


interface RecommendationPostProps {
    id: number
    title: string
    text: string
    channelName: string
    mediaType?: string | undefined // тип указан неточно, изменить
    mediaURL?: string | undefined

}

function RecommendationPost(props: RecommendationPostProps): JSX.Element {

    // не работает
    // const textProps = {
    //     textOverflow: 'ellipsis',
    //     overflow: 'hidden',
    //     whiteSpace: 'nowrap'
    // }


    return (
        <Card
            radius="md"
            p='15px 0px' // для растяжения изображения на всю длину карточки
            bd='1px solid black'
            id={'RecommendationPost'+props.id}
            style={{
                height: '550px',
                width: '380px',
                flexShrink: 0,
            }}
        >
            <Flex // содержание|кнопка
                direction='column'
                justify='space-between'
                h='100%'
                style={{alignItems: 'center'}}
            >
                <Flex
                    gap='10px'
                    w='100%'
                    direction='column'
                    style={{alignItems: 'center'}}
                >
                    <Text
                        style={{
                            // для переноса строк
                            textAlign: 'center', // Центрирование текста по каждой строке
                            fontSize: '26px',
                            marginBottom: '10px',
                            padding: '0px 20px',

                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                            display: '-webkit-box',
                            WebkitLineClamp: 2,  // Лимит в две строки
                            WebkitBoxOrient: 'vertical',
                        }}
                        // style={textProps} не сработает, т.к. style объявлен 2 раза

                    >
                        {props.title}
                    </Text>

                    <Card.Section style={{background: darkBackgroundColor, width: '100%'}}>
                        {/*проверка на пустые поля*/}
                        {props.mediaType && props.mediaURL ? (
                            <PostMedia
                                // уникальный ключ для каждого медиа
                                id={`RecommendationPost${props.id}Media`}
                                // если на этом шаге, значит массивы уже не пустые
                                mediaType={props.mediaType!}
                                mediaURL={props.mediaURL!}
                            />
                        ): <hr style={{backgroundColor: 'white', height: '140px'}}/>
                        }
                    </Card.Section>

                    <Text
                        style={{
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            width: '100%', // без него выходит за рамки
                            textAlign: 'center',
                            padding: '0px 20px',
                            marginBottom: '5px',
                            fontSize: '22px',

                            whiteSpace: 'nowrap',  // Без переноса строки
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                        }}>
                        {props.channelName}
                    </Text>



                    <Text
                        style={{
                            textAlign: 'center',
                            padding: '0px 20px',
                            fontSize: '18px',

                            overflow: 'hidden',
                            textOverflow: 'ellipsis',

                            display: '-webkit-box',
                            WebkitLineClamp: 3,  // Ограничение на три строки
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        {props.title}
                    </Text>
                </Flex>

                <Button {...styleBlueButton}>
                    Читать
                </Button>
            </Flex>
        </Card>
    );
}

export default RecommendationPost

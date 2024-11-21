import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import {Flex, Container, Image} from '@mantine/core';
import {darkBackgroundColor, mainBackgroundColor, skyBlueColor} from "@constants";

import RecommendationPost from "../components/BlogPost/RecommendationPost";

import PopularChannelItem from "../components/PopularChannelItem/PopularChannelItem";

function MainPage() {

    const recommendations = [
        {id: 1, title: 'Отправьтесь в путешествие уже сейчас! Отправьтесь в путешествие уже сейчас! Отправьтесь в путешествие уже сейчас!', text: 'Отправьтесь с нами в незабываемые путешествия по разным уголкам мира! Мы покажем экзотические страны, уникальные места и невероятные истории из наших поездок.', channelName: 'Путешествия и путешествия и снова путешествия', mediaType: 'image', mediaURL: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'},
        {id: 2, title: 'Вышла новая игра', text: 'Скачать бесплатно без смс и регистрации можно в канале', channelName: 'CyberSport', mediaType: 'video', mediaURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
        {id: 3, title: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!', text: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!', channelName: 'Мир моды', mediaType: 'asdasdasdasdads'},
        {id: 4, title: 'Ничего интересного', text: '---', channelName: 'Научное сообщество Научное сообщество Научное сообщество Научное сообщество', mediaType: 'image', mediaURL: 'https://'},
        {id: 5, title: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!', text: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!', channelName: 'Мир моды', mediaType: 'asdasdasdasdads', mediaURL: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'},
    ]

    const popularChannels = [
        {id: 1, channelName: 'Путешествия и путешествия и снова путешествия', description: 'Отправьтесь с нами в незабываемые путешествия по разным уголкам мира! Мы покажем экзотические страны, уникальные места и невероятные истории из наших поездок. Вдохновляйтесь на новые открытия, узнайте о полезных лайфхаках для путешествий и погружайтесь в культуру разных стран!', subscriberNumber: 917021, imageURL: 'assets/images/post/post_image_tall.jpg'},
        {id: 2, channelName: 'Технологии и гаджеты', description: 'Последние новинки мира технологий, обзоры гаджетов, советы по использованию и сравнительные тесты – всё это вы найдете на нашем канале.', subscriberNumber: 61879, imageURL: 'assets/images/post/post_image_usual.webp'},
        {id: 3, channelName: 'Мир моды', description: 'Узнайте, как чувствовать себя уверенно и стильно каждый день!', subscriberNumber: 5000004, imageURL: 'assets/images/post/post_image_wide.jpg'},
        {id: 4, channelName: 'CyberSport', description: 'Мы окунем вас в мир видеоигр и киберспорта! Новости игровой индустрии, прохождения, обзоры новинок, трансляции и обсуждения – все это ждет вас на нашем канале. Будьте в курсе всех событий игровой вселенной!', subscriberNumber: 1078},
        {id: 5, channelName: 'Научное сообщество Научное сообщество Научное сообщество Научное сообщество', description: 'Погружайтесь в удивительный мир науки, где каждое открытие — это шаг к разгадке тайн вселенной и человеческого сознания! На нашем канале вы узнаете о самых захватывающих исследованиях в области астрофизики, генетики, биологии, химии, нейронаук и многих других областях. Мы рассказываем о научных прорывах простым и понятным языком, проводим увлекательные эксперименты и приглашаем экспертов для ответов на самые интересные вопросы.\n' +
                'Хотите понять, как зародилась жизнь на Земле? Каковы перспективы исследования космоса и есть ли шанс на колонизацию других планет? Задумываетесь о том, как наука изменяет мир вокруг нас, начиная с новых технологий и заканчивая экологическими исследованиями? Наш канал станет для вас источником вдохновения и знаний! Мы проводим научные эксперименты, делаем обзоры научных новостей, раскрываем подробности крупнейших исследований и развенчиваем популярные мифы.', subscriberNumber: 8, imageURL: 'https://www.google.com/'}
    ]

    return (


        <Flex
            ml={{sm: '50px', base: '0px'}} // в совсем узких окнах отступа нет
            id='mainPageFlexbox'
            gap="25px"
            direction="column"
            wrap="wrap"
            w='100%'
            // style={{overflow: 'hidden'}}
        >

            <Container
                id='bannerContainer'
                bg={mainBackgroundColor}
                h='160px'
                // m='15px 0px' // выравнивание по началу
                m='15px auto'
                bd='2px solid black'
                display='flex'
                w='100%'
                style={{
                    borderRadius: '20px',
                    maxWidth: '650px'
                }}
            >
                <Flex
                    align='center'
                    justify="center"
                    w='100%'
                >
                    <Image
                        h='80%'
                        src={'/assets/images/Logo.png'}
                    />
                    <span style={{fontSize: '65px'}}>
                    BlogPoint
                    </span>
                </Flex>

            </Container>

            <Container
                id='recommendationContainer'
            >
                <div style={{textAlign: 'center', marginBottom: '40px'}}>
                    <span style={{fontSize: '48px', fontWeight: 600}} >
                        Рекомендации
                    </span>
                </div>
                {/*<div style={{overflow:'hidden'}}>*/}
                {/*    <Flex*/}
                {/*        id='recommendationFeed'*/}
                {/*        mb='40px 0px 30px'*/}
                {/*        gap='40px'*/}
                {/*        w='auto'*/}
                {/*    >*/}
                        <Carousel
                            id='recommendationFeed'
                            withIndicators
                            slideSize='33.333333%'
                            slideGap='40px'
                            loop
                            controlSize='50'

                            styles={{
                                // border: `2px solid ${mainBackgroundColor}`, // Цвет границы
                                // borderRadius: '12px', // Скругление для контролов

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
                                    margin: '10px 0 10px',
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

                            {recommendations.map((el, _) => (
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
                    {/*</Flex>*/}
                {/*</div>*/}


            </Container>

            {/*Просто линия*/}
            <Container
                fluid
                h='8px'
                m='0px'
                bg={darkBackgroundColor}
            ></Container>

            <Container
                id='popularChannelsContainer'
            >
                <div style={{textAlign: 'center'}}>
                    <span style={{fontSize: '48px', fontWeight: 600}}>
                        Популярные каналы
                    </span>
                </div>
                <Flex
                    id='recommendationFeed'
                        m='20px 0px'
                        gap='30px'
                        direction='column'
                        w='100%'
                    >
                        {popularChannels.map((el, _) =>
                            <PopularChannelItem
                                id={el.id}
                                channelName={el.channelName}
                                description={el.description}
                                subscriberNumber={el.subscriberNumber}
                                imageURL={el.imageURL}/>
                        )}
                    </Flex>
            </Container>
        </Flex>
);
}

export default MainPage

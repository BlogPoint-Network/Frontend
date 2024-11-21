import {Button, Card, Text, Flex, Image} from "@mantine/core";
import {styleBlueButton} from '../../../../styles/styles'
import {IconAccessible} from "@tabler/icons-react";

interface PopularChannelItemProps {
    id: number
    channelName: string
    description: string
    subscriberNumber: number
    imageURL?: string | undefined
}

function PopularChannelItem(props: PopularChannelItemProps) {

    return (
        <Card
            radius="md"
            h='280px'
            w='800px'
            m='15px 0px'
            bd='1px solid black'
            id={'PopularChannelItem'+props.id}
            style={{
                display: 'flex',
                alignItems: 'start'
        }}
        >
            <Flex // картинка|текстовый блок
                direction='row'
                gap='40px'
                justify='space-between'
                h='100%'
            >
                <div style={{width: '280px'}}>
                    <Image
                        // minWidth: '140px',  не работает
                        style={{
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            height: '100%',
                            width: 'auto',
                            maxWidth: '280px', // для
                            border: '1px solid black'
                        }}
                        src={props.imageURL ? props.imageURL: '../../../public/assets/images/icons/default_post.jpg'}
                    >
                    </Image>
                </div>
                <Flex // Верхний блок|нижний блок
                    direction='column'
                    justify='space-between'
                    style={{
                        overflow: 'hidden',
                        maxWidth: '430px'
                    }}
                >
                    <Flex // Заглавие|описание
                        direction='column'
                        gap='10px'
                    >
                        <Text
                            style={{
                                fontSize: '26px',

                                // для переноса строк
                                textOverflow: 'ellipsis',
                                overflow: 'hidden',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {props.channelName}
                        </Text>

                        <Text
                            style={{
                                // для переноса строк
                                fontSize: '18px',
                                fontWeight: 'bold',
                                display: '-webkit-box',
                                WebkitLineClamp: 4,
                                WebkitBoxOrient: 'vertical',

                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                whiteSpace: 'normal'
                            }}
                        >
                            {props.description}
                        </Text>
                    </Flex>
                    <Flex // Подписчики|кнопка
                        justify='space-between'
                    >
                        <Flex // ИконкаПодписчик|Число
                            gap='10px'
                            align='center'
                        >
                            <IconAccessible
                                size="2.2rem"
                                stroke={2.5}
                                // color={skyBlueColor}
                                color='#3ec96f'
                            />
                            <Text
                                style={{
                                    textOverflow: 'ellipsis',
                                    fontSize: '1.2rem'
                                }}
                            >
                                <i>{addSpacesToNumber(props.subscriberNumber)}</i>
                            </Text>

                        </Flex>
                        <Button {...styleBlueButton}>
                            Перейти
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Card>
    );
}

function addSpacesToNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default PopularChannelItem

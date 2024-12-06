import { Card, Flex, Image, Text } from '@mantine/core';
import { IconAccessible } from '@tabler/icons-react';
import { BlueButton, GreyButton, Heading2, Heading4 } from '@ui';

interface PopularChannelItemProps {
  id: number;
  channelName: string;
  description: string;
  subscriberNumber: number;
  imageURL: string;
}

function ChannelPageChannelDescription(props: PopularChannelItemProps) {
  return (
    <Card
      radius="md"
      h="290px"
      w="800px"
      m="15px 0px"
      bd="1px solid black"
      id={'PopularChannelItem' + props.id}
      style={{
        display: 'flex',
        alignItems: 'start',
      }}
    >
      <Flex // картинка|текстовый блок
        direction="row"
        gap="40px"
        justify="space-between"
        h="100%"
      >
        <div style={{ width: '280px' }}>
          <Image
            // minWidth: '140px',  не работает
            h="100%"
            w="auto"
            ml="auto"
            mr="auto"
            style={{
              maxWidth: '280px',
              border: '1px solid black',
              borderRadius: '30px',
            }}
            src={props.imageURL}
          ></Image>
        </div>
        <Flex // Верхний блок|нижний блок
          direction="column"
          justify="space-between"
          style={{
            overflow: 'hidden',
            maxWidth: '430px',
          }}
        >
          <Flex // Заглавие|описание
            direction="column"
            gap="10px"
          >
            <Flex // Название|подписчики
              justify="space-between"
            >
              <Heading2 lineClamp={1}>{props.channelName}</Heading2>
              <Flex // ИконкаПодписчик|Число
                gap="10px"
                align="center"
              >
                <IconAccessible size="2.2rem" stroke={2.5} color="#3ec96f" />
                <Text size="1.2rem">
                  <i>{addSpacesToNumber(props.subscriberNumber)}</i>
                </Text>
              </Flex>
            </Flex>
            <Heading4 lineClamp={4}>{props.description}</Heading4>
          </Flex>
          <Flex // Подробнее|Подписаться
            justify="space-between"
          >
            <GreyButton>Перейти</GreyButton>
            <BlueButton>Перейти</BlueButton>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

function addSpacesToNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export default ChannelPageChannelDescription;

// import { FC } from 'react';
// import { Card, Flex, Image, Text } from '@mantine/core';
// import { IconAccessible } from '@tabler/icons-react';
// import { Heading1, Heading4 } from '@ui';
//
// interface IChannelMyChannelDescriptionProps {
//   id: number;
//   channelName: string;
//   description: string;
//   subscriberNumber: number;
//   imageURL?: string | undefined;
// }
//
// export const ChannelPageChannelDescription: FC<
//   IChannelMyChannelDescriptionProps
// > = props => {
//   return (
//     <Card
//       p="lg"
//       radius="md"
//       h="280px"
//       w="800px"
//       m="15px 0px"
//       bd="1px solid black"
//       id={'PopularChannelItem' + props.id}
//       style={{
//         display: 'flex',
//         alignItems: 'start',
//       }}
//     >
//       <Heading1 mt="sm" lineClamp={1}>
//         {props.channelName}
//       </Heading1>
//       <Flex // картинка|текстовый блок
//         direction="row"
//         gap="40px"
//         justify="space-between"
//         h="100%"
//       >
//         <div style={{ width: '280px' }}>
//           <Image
//             // minWidth: '140px',  не работает
//             ml="auto"
//             mr="auto"
//             h="100%"
//             w="auto"
//             style={{
//               maxWidth: '280px', // для
//               border: '1px solid black',
//             }}
//             src={
//               props.imageURL
//                 ? props.imageURL
//                 : '../../../public/assets/images/icons/default_post.jpg'
//             }
//           ></Image>
//         </div>
//         <Flex // Верхний блок|нижний блок
//           direction="column"
//           justify="space-between"
//           gap="30px"
//           style={{
//             overflow: 'hidden',
//             maxWidth: '430px',
//           }}
//         >
//           <Heading4
//             style={{
//               overflowY: 'scroll',
//               overflowX: 'hidden',
//             }}
//           >
//             {props.description}
//           </Heading4>
//           <Flex // ИконкаПодписчик|Число
//             gap="10px"
//             align="center"
//           >
//             <IconAccessible
//               size="2.2rem"
//               stroke={2.5}
//               // color={skyBlueColor}
//               color="#3ec96f"
//             />
//             <Text size="1.2rem">
//               <i>{addSpacesToNumber(props.subscriberNumber)}</i>
//             </Text>
//           </Flex>
//         </Flex>
//       </Flex>
//     </Card>
//   );
// };
//
// function addSpacesToNumber(num: number): string {
//   return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
// }

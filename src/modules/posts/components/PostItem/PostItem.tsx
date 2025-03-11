import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IPost } from '@app-types';
import dislike from '@assets/images/dislike.png';
import like from '@assets/images/like.png';
import view from '@assets/images/view.png';
import { skyBlueColor } from '@constants';
import { Button, Card, Container, Flex } from '@mantine/core';
import { RichTextEditor } from '@mantine/tiptap';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { renderImgContent } from '@utils/renderImgContent.ts';
import {
  BlueButton,
  ChannelIconImage,
  Heading2,
  Heading4,
  Heading5,
  List,
  SmallIconImage,
  Tag,
} from '@ui';

export const PostItem = (props: IPost) => {
  const processedContent = renderImgContent(props.content, props.images);
  const navigate = useNavigate();
  const editor = useEditor({
    editable: false,
    extensions: [
      StarterKit,
      Image,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: processedContent,
  });

  // чтобы убрать padding с внутреннего элемента RichTextEditor
  const editorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (editorRef.current) {
      const proseMirror = editorRef.current.querySelector(
        '.tiptap.ProseMirror',
      ) as HTMLElement;
      if (proseMirror) {
        proseMirror.style.padding = '0px';
      }
    }
  }, []);

  // нужно для динамического расчета строк
  const tagListRef = useRef<HTMLDivElement>(null);
  const [maxLines, setMaxLines] = useState(5);
  useEffect(() => {
    if (tagListRef.current) {
      const tagListHeight = tagListRef.current.clientHeight;

      if (tagListHeight > 60) {
        setMaxLines(3);
      } else if (tagListHeight > 30) {
        setMaxLines(4);
      } else {
        setMaxLines(5);
      }
    }
  }, [props.tagList]); // Пересчитываем при изменении списка тегов

  return (
    <Card
      radius="md"
      p="15px 0px" // для растяжения изображения на всю длину карточки
      bd="1px solid black"
      id={'RecommendationPost' + props.id}
      style={{
        position: 'relative', // для элементов, прижатых к углам
        height: '670px',
        width: '450px',
        flexShrink: 0,
      }}
    >
      <Flex // содержание|кнопка
        direction="column"
        justify="space-between"
        h="100%"
        style={{ alignItems: 'center' }}
      >
        <Flex // содержание
          gap="10px"
          w="100%"
          direction="column"
          style={{ alignItems: 'center' }}
        >
          <Flex // канал|картинка|текст
            gap={'20px'}
            pl="20px"
            pr="80px"
            direction="row"
            align="center"
            justify="flex-start"
            style={{ width: '100%' }} // Добавляем ширину 100%
          >
            <ChannelIconImage src={props.channelIcon} />
            <Container pl="0px" style={{ flexGrow: 1, minWidth: 0 }}>
              <Heading4
                fw="500"
                style={{
                  textDecoration: 'underline',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                }}
              >
                {props.channelName}
              </Heading4>
            </Container>
            <Heading5
              style={{ position: 'absolute', right: '15px', top: '15px' }}
            >
              {props.dateOfCreation}
            </Heading5>
          </Flex>

          {/*<Card.Section*/}
          {/*  style={{ background: darkBackgroundColor, width: '100%' }}*/}
          {/*>*/}
          {/*  /!*проверка на пустые поля*!/*/}
          {/*  {props.mediaType && props.mediaURL ? (*/}
          {/*    <PostMedia*/}
          {/*      h="200px" // тут все работает*/}
          {/*      // уникальный ключ для каждого медиа*/}
          {/*      id={`RecommendationPost${props.id}Media`}*/}
          {/*      // если на этом шаге, значит массивы уже не пустые*/}
          {/*      mediaType={props.mediaType[0]!}*/}
          {/*      mediaURL={props.mediaURL[0]!}*/}
          {/*    />*/}
          {/*  ) : (*/}
          {/*    <hr style={{ backgroundColor: 'white', height: '140px' }} />*/}
          {/*  )}*/}
          {/*</Card.Section>*/}

          <Heading2 fw={'600'} lineClamp={2} ta="center" p="0px 20px">
            {props.title}
          </Heading2>
          <Flex // теги|текст
            p="0 20"
            direction={'column'}
            gap="10px"
          >
            <Flex direction={'row'} gap="10px" wrap={'wrap'} ref={tagListRef}>
              <List items={props.tagList} renderItem={Tag} />
            </Flex>
            <RichTextEditor editor={editor} bd={'none'} ref={editorRef}>
              <Heading4
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: maxLines, // Динамическое ограничение строк
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <RichTextEditor.Content />
              </Heading4>
            </RichTextEditor>
          </Flex>
        </Flex>

        <Flex // лайк-дизлайк|просмотры
          ml={'0px'}
          justify={'space-between'}
          wrap={'nowrap'}
          w={'90%'}
        >
          <Flex // лайк|дизлайк
            gap="20px"
          >
            <Flex // лайк
              align={'center'}
              gap="5px"
            >
              <Button color={'transparent'} w={'42px'} h={'42px'} p={'0px'}>
                <SmallIconImage src={like} />
              </Button>
              <Heading5 color={'green'}>{props.likes}</Heading5>
            </Flex>
            <Flex // дизлайк
              align={'center'}
              gap="5px"
            >
              <Button color={'transparent'} w={'42px'} h={'42px'} p={'0px'}>
                <SmallIconImage src={dislike} />
              </Button>
              <Heading5 color={'red'}>{props.dislikes}</Heading5>
            </Flex>
          </Flex>
          <Flex // просмотр
            align={'center'}
            gap="5px"
          >
            <SmallIconImage src={view} h={'1.5rem'} />
            <Heading5 color={skyBlueColor}>{props.views}</Heading5>
          </Flex>
        </Flex>
        <BlueButton
          mb={'0px'}
          onClick={() =>
            navigate(`/channel/${props.channelId + ''}/post/${props.id + ''}`)
          }
        >
          Читать
        </BlueButton>
      </Flex>
    </Card>
  );
}

export default PostItem;

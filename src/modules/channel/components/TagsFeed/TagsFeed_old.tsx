import { CATEGORIES, skyBlueColor, TAGS } from '@constants';
import { Carousel } from '@mantine/carousel';
import { Button, Flex, Menu } from '@mantine/core';
import Tag from '@modules/channel/components/Tag/Tag.tsx';
import { Heading4 } from '@ui';

export const TagsFeed = () => {
  return (
    <Flex>
      <Carousel
        id="recommendationFeed"
        // draggable={{ md: false, base: true }} // не работает
        w={'320px'} // выравнивание по центру
        ml={'30px'}
        // controlSize="50"
        type="container"
        slideSize={{ base: '100%', '300px': '100%', '500px': '33.333333%' }}
        loop
        align="start"
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
        }}
      >
        {CATEGORIES.map(category => (
          <Carousel.Slide key={category.id}>
            <Menu
              trigger={'hover'}
              shadow="md"
              width={200}
              h={'45px'} // работает, не трогать
            >
              <Menu.Target>
                <Button
                  w="100%"
                  bg="transparent"
                  bd={`solid ${category.color} 2px`}
                >
                  <Heading4 style={{ color: category.color }}>
                    {category.name}
                  </Heading4>
                </Button>
              </Menu.Target>

              <Menu.Dropdown
                w={'auto'}
                style={{ border: `solid ${category.color} 1px` }}
              >
                {TAGS.filter(tag => tag.category_id == category.id).map(tag => (
                  <Menu.Item>
                    <Tag
                      id={tag.id}
                      color={tag.color}
                      name={tag.name}
                      category_id={tag.category_id}
                    />
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Flex>
  );
};

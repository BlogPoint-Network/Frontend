import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '@constants/categories.ts';
import {
  Flex,
  Group,
  NativeSelect,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useChannelCreate } from '@modules/channel/hooks/useChannelCreate.ts';
import {
  BlueButton,
  Dropzone,
  FormBox,
  GreyButton,
  Heading1,
  Heading4,
} from '@ui';

import { ProfileContext } from '../../../../app/context';

export const CreateChannelForm = () => {
  const createChannel = useChannelCreate();
  const profile = useContext(ProfileContext);
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      category: '',
      imageBanner: '',
      imageLogo: '',
    },
    validate: {
      name: value =>
        value.length < 3 || value.length > 60
          ? 'Название канала должно быть длиннее 3 символов и не более 60 символов'
          : null,
      description: value =>
        value && (value.length < 10 || value.length > 500)
          ? 'Описание должно быть длиннее 10 символов и не более 500 символов'
          : null,
      category: value => (value ? null : 'Выберите категорию канала из списка'),
      imageBanner: value => (value ? null : 'Загрузите корректное изображение'),
      imageLogo: value => (value ? null : 'Загрузите корректное изображение'),
    },
  });

  // для DropZone, иначе придется делать с провайдером для формы
  const handleDropFile = (image: File) => {
    form.setFieldValue('image', image);
  };
  const handleRejectFile = () => {
    form.setFieldValue('image', null);
  };

  return (
    <FormBox>
      <Heading1>Создание канала</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            createChannel.mutate({
              name: values.name,
              description: values.description,
              category: values.category,
              imageBanner: values.imageBanner,
              imageLogo: values.imageLogo,
              ownerId: profile?.user?.id ?? '',
            });
          })}
        >
          <Flex direction="column" gap="md">
            <TextInput
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>Название канала</Heading4>}
              placeholder="Введите название канала"
              {...form.getInputProps('name')}
            />
            <Textarea
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={10}>Описание канала</Heading4>}
              placeholder="Введите описание"
              {...form.getInputProps('description')}
            />
            <NativeSelect
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>Категория канала</Heading4>}
              data={categories.map(category => ({
                value: category.id.toString(), // значение id как строка
                label: category.name, // отображаемое имя категории
              }))}
              {...form.getInputProps('category')}
            />
            <Heading4>Изображение канала</Heading4>
            <Dropzone
              form={form}
              onDropFile={handleDropFile}
              onRejectFile={handleRejectFile}
            />
            {/* Отображение ошибки */}
            {form.errors.image && <Text c="red">{form.errors.image}</Text>}
            <Flex
              mih={50}
              gap={{ base: '0', xs: 'xs' }}
              justify="center"
              align="center"
              direction={{ base: 'column', xs: 'row' }}
            >
              <GreyButton
                mt="sm"
                w={'fit-content'}
                onClick={() => navigate('/user-channels')}
              >
                Отменить
              </GreyButton>
              <BlueButton type="submit" mt="sm" w={'fit-content'}>
                Подтвердить
              </BlueButton>
            </Flex>
          </Flex>
        </form>
      </Group>
    </FormBox>
  );
};

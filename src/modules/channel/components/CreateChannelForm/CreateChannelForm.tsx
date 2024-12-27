import { useNavigate } from 'react-router-dom';
import { useChannel } from '@hooks';
//import { useNavigate } from 'react-router-dom';
import { Flex, Group, Text, Textarea, TextInput } from '@mantine/core';
import { FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import {
  BlueButton,
  FormBox,
  Dropzone,
  GreyButton,
  Heading1,
  Heading4,
} from '@ui';
//import { useChannel } from '@hooks';

export const CreateChannelForm = () => {
  const channel = useChannel();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      image: null as File | FileWithPath | null,
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
      image: value => (value ? null : 'Загрузите корректное изображение'),
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
            channel
              .createChannel(values.name, values.description)
              .then(index => {
                navigate(`/channel/${index + ''}`);
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
              gap="xs"
              justify="center"
              align="center"
              direction="row"
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

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useChannel } from '@hooks';
//import { useNavigate } from 'react-router-dom';
import { Flex, Group, rem, Text, Textarea, TextInput } from '@mantine/core';
import { Dropzone, FileWithPath } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { IconCheck, IconPhoto, IconX } from '@tabler/icons-react';
import {
  BlueButton,
  FormBox,
  GreyButton,
  Heading1,
  Heading3,
  Heading4,
} from '@ui';
//import { useChannel } from '@hooks';

export const CreateChannelForm = () => {
  const channel = useChannel();
  const navigate = useNavigate();

  // Состояние иконки
  const [uploadStatus, setUploadStatus] = useState<
    'idle' | 'accept' | 'reject' | 'success'
  >('idle');

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
      image: value => (value ? null : null),
      //image: value => (value ? null : 'Загрузите корректное изображение'),
    },
  });

  return (
    <FormBox>
      <Heading1>Создание канала</Heading1>
      <Group justify="center" grow>
        <form
          onSubmit={form.onSubmit(values => {
            channel.createChannel(values.name, values.description).then(() => navigate('/my-channel'));
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
              onDrop={image => {
                const [file] = image; // конвертация в нужный тип
                form.setFieldValue('image', file);
                setUploadStatus('success');
                console.log('Изображение загружено', image);
              }}
              onReject={image => {
                form.setFieldValue('image', null);
                setUploadStatus('reject');
                console.log('Изображение отклонено', image);
              }}
              maxSize={200 * 1024 ** 2}
              accept={['image/png', 'image/jpeg', 'image/jpg']}
              bg="white"
              style={{
                borderRadius: '20px',
                // граница если изображение некорректно
                border: form.errors.image
                  ? '1.5px solid var(--mantine-color-red-6)'
                  : '',
              }}
            >
              <Group
                justify="center"
                gap="xl"
                mih={220}
                style={{ pointerEvents: 'none' }}
              >
                <Flex gap={'30px'} ml={'20px'}>
                  <div>
                    {uploadStatus === 'success' && (
                      <IconCheck
                        style={{
                          width: rem(100),
                          height: rem(100),
                          color: 'var(--mantine-color-green-6)',
                        }}
                        stroke={1.5}
                      />
                    )}
                    {uploadStatus === 'reject' && (
                      <IconX
                        style={{
                          width: rem(100),
                          height: rem(100),
                          color: 'var(--mantine-color-red-6)',
                        }}
                        stroke={1.5}
                      />
                    )}
                    {uploadStatus === 'idle' && (
                      <IconPhoto
                        style={{
                          width: rem(100),
                          height: rem(100),
                          color: 'var(--mantine-color-dimmed)',
                        }}
                        stroke={1.5}
                      />
                    )}
                  </div>
                  <div>
                    <Heading3 lh={1.2}>
                      Нажмите, чтобы выбрать изображение или перетащите его в
                      это поле
                    </Heading3>
                    <Text size="sm" c="dimmed" inline mt={15}>
                      Размером не более 200Кб
                    </Text>
                  </div>
                </Flex>
              </Group>
            </Dropzone>
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
                onClick={() => navigate('/')}
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

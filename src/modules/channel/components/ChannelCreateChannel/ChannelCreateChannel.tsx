import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { Flex, Group, rem, Text, Textarea, TextInput } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useForm } from '@mantine/form';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';
import { BlueButton, FormBox, Heading4 } from '@ui';

export const ChannelCreateChannel = () => {
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: '',
      description: '',
      image: null,
    },

    validate: {
      name: value =>
        value.length < 3
          ? 'Название канала должно быть длиннее 3 символов'
          : null,
      description: value =>
        value && value.length < 10
          ? 'Описание должно быть длиннее 10 символов'
          : null,
      // image: value => (value ? null : 'Изображение обязательно'),
    },
  });

  return (
    <FormBox>
      <form
        onSubmit={form.onSubmit(() => {
          navigate('../MyChannel');
          // console.log(values);
          // profile?.registrationProfile(
          //   values.login,
          //   values.email,
          //   values.password,
          // );
        })}
      >
        <Flex direction="column" gap="md">
          <TextInput
            label={<Heading4 mb={10}>Название канала</Heading4>}
            placeholder="Введите название канала"
            {...form.getInputProps('name')}
          />
          {/*<FileInput*/}
          {/*  label={*/}
          {/*    <Heading4 mb={10}>*/}
          {/*      Загрузить изображение*/}
          {/*    </Heading4>*/}
          {/*  }*/}
          {/*  placeholder="Выберите файл"*/}
          {/*  {...form.getInputProps('image')}*/}
          {/*/>*/}
          <Textarea
            label={<Heading4 mb={10}>Описание канала</Heading4>}
            placeholder="Введите описание"
            {...form.getInputProps('description')}
          />
          <Heading4>Изображение канала</Heading4>
          <Dropzone
            onDrop={files => console.log('accepted files', files)}
            onReject={files => console.log('rejected files', files)}
            maxSize={5 * 1024 ** 2}
            accept={IMAGE_MIME_TYPE}
            bg="white"
            style={{ borderRadius: '10px' }}
          >
            <Group
              justify="center"
              gap="xl"
              mih={220}
              style={{ pointerEvents: 'none' }}
            >
              <Dropzone.Accept>
                <IconUpload
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: 'var(--mantine-color-blue-6)',
                  }}
                  stroke={1.5}
                />
              </Dropzone.Accept>
              <Dropzone.Reject>
                <IconX
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: 'var(--mantine-color-red-6)',
                  }}
                  stroke={1.5}
                />
              </Dropzone.Reject>
              <Dropzone.Idle>
                <IconPhoto
                  style={{
                    width: rem(52),
                    height: rem(52),
                    color: 'var(--mantine-color-dimmed)',
                  }}
                  stroke={1.5}
                />
              </Dropzone.Idle>

              <div>
                <Text size="xl" inline>
                  Drag images here or click to select files
                </Text>
                <Text size="sm" c="dimmed" inline mt={7}>
                  Attach as many files as you like, each file should not exceed
                  5mb
                </Text>
              </div>
            </Group>
          </Dropzone>
          <BlueButton type="submit" color={skyBlueColor} m="auto">
            <Heading4>Создать канал</Heading4>
          </BlueButton>
        </Flex>
      </form>
    </FormBox>
  );
};

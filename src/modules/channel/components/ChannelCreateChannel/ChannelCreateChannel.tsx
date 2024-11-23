import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import {
  Button,
  FileInput,
  Flex,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { FormBox } from '@ui/FormBox';

export const ChannelCreateChannel = () => {
  const navigate = useNavigate();

  const btnProps = {
    h: 40,
    w: 200,
    radius: 'md',
    bd: 'solid black 1px',
  };

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
        value.length < 10 ? 'Описание должно быть длиннее 10 символов' : null,
      image: value => (value ? null : 'Изображение обязательно'),
    },
  });

  return (
    <FormBox>
      <Flex direction="column" gap="md">
        <TextInput
          label="Название канала"
          placeholder="Введите название канала"
          {...form.getInputProps('name')}
        />
        <Textarea
          label="Описание канала"
          placeholder="Введите описание"
          {...form.getInputProps('description')}
        />
        <FileInput
          label="Загрузить изображение"
          placeholder="Выберите файл"
          {...form.getInputProps('image')}
        />
        <Button
          {...btnProps}
          bg={skyBlueColor}
          onClick={() => {
            navigate('../my-channel');
          }}
        >
          <Text size="lg">Создать канал</Text>
        </Button>
      </Flex>
    </FormBox>
  );
};

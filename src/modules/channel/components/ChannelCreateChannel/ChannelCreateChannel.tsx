import { useNavigate } from 'react-router-dom';
import { skyBlueColor } from '@constants';
import { FileInput, Flex, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Button, FormBox } from '@ui';

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
        value && value.length < 10 ? 'Описание должно быть длиннее 10 символов' : null,
      image: value => (value ? null : 'Изображение обязательно'),
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
            label={
              <Text size={'xl'} mb={10}>
                Название канала
              </Text>
            }
            placeholder="Введите название канала"
            {...form.getInputProps('name')}
          />
          <Textarea
            label={
              <Text size={'xl'} mb={10}>
                Описание канала
              </Text>
            }
            placeholder="Введите описание"
            {...form.getInputProps('description')}
          />
          <FileInput
            label={
              <Text size={'xl'} mb={10}>
                Загрузить изображение
              </Text>
            }
            placeholder="Выберите файл"
            {...form.getInputProps('image')}
          />
          <Button type="submit" color={skyBlueColor}>
            <Text size="lg">Создать канал</Text>
          </Button>
        </Flex>
      </form>
    </FormBox>
  );
};

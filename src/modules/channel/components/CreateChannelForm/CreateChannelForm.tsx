import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '@constants/categories.ts';
import { useLanguage } from '@hooks/useLanguage.ts';
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
  const { l } = useLanguage();
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
        value.length < 3 || value.length > 60 ? l.validationChannelName : null,
      description: value =>
        value && (value.length < 10 || value.length > 500)
          ? l.validationChannelDescription
          : null,
      category: value => (value ? null : l.validationChannelCategory),
      imageLogo: value => (value ? null : l.validationChannelImage),
    },
  });

  // для DropZone, иначе придется делать с провайдером для формы
  const handleDropFile = (image: File) => {
    form.setFieldValue('imageLogo', image);
  };
  const handleRejectFile = () => {
    form.setFieldValue('imageLogo', null);
  };

  return (
    <FormBox>
      <Heading1>{l.channelCreation}</Heading1>
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
              label={<Heading4 mb={5}>{l.channelName}</Heading4>}
              placeholder={l.enterChannelName}
              {...form.getInputProps('name')}
            />
            <Textarea
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={10}>{l.channelDescription}</Heading4>}
              placeholder={l.enterChannelDescription}
              {...form.getInputProps('description')}
            />
            <NativeSelect
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>{l.channelCategory}</Heading4>}
              data={categories.map(category => ({
                value: category.id.toString(), // значение id как строка
                label: category.name, // отображаемое имя категории
              }))}
              key={form.key('category')}
              {...form.getInputProps('category')}
            />
            <Heading4>{l.channelImage}</Heading4>
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
                {l.btnCancel}
              </GreyButton>
              <BlueButton type="submit" mt="sm" w={'fit-content'}>
                {l.btnConfirm}
              </BlueButton>
            </Flex>
          </Flex>
        </form>
      </Group>
    </FormBox>
  );
};

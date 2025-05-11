import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IContentImage, IMedia } from '@app-types';
import { categories, tags } from '@constants';
import { useUploadFile } from '@hooks/useUploadFile.ts';
import { FileInput, Flex, Group, Input } from '@mantine/core';
import { TextInput } from '@mantine/core';
import { FileLoader } from '@modules/experementalTest/components/FileLoader.tsx';
import { usePostCreate } from '@modules/posts/hooks/usePostCreate.ts';
import { Editor } from '@tinymce/tinymce-react';
import {
  BlueButton,
  FormBox,
  GreyButton,
  Heading1,
  Heading4,
  TagMultiSelect,
} from '@ui';
import { processHtmlContent } from '@utils/processContentAndFiles.ts';
import { useLanguage } from '@hooks/useLanguage.ts';

interface MediaFile {
  file: File;
  previewUrl: string;
  type: 'image' | 'video' | 'audio';
}

interface BlobInfo {
  blob: () => Blob;
}

export const CreatePostForm = () => {
  const { l } = useLanguage();
  const apiKey = 'qup8181vvir7d4vosyyut4evohlj4r0h4w84vsbbhx4k0k2y';
  const uploadFile = useUploadFile();
  const navigate = useNavigate();
  const postCreate = usePostCreate();

  const [title, setTitle] = useState('');
  const { id } = useParams(); //channel id
  const [previewImg, setPreviewImg] = useState<File | null>(null);
  const [content, setContent] = useState<string>('');
  const [selectTagIds, setSelectTagIds] = useState<number[]>([]);
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([]);

  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };

  const handleSubmit = async () => {
    // 🔹 1. Обрабатываем контент и выделяем изображения
    const processedContent = processHtmlContent(content);
    console.log('Обработал контент')

    // 🔹 2. Загружаем previewImage
    const previewResponse = await uploadFile.mutateAsync(previewImg);
    const previewImageData: IMedia = {
      name: '',
      filename: previewResponse.data.data.filename,
      url: previewResponse.data.data.url,
    };
    console.log('Обработал превью')

    // 🔹 3. Загружаем изображения из контента
    const uploadedImages: IContentImage[] = await Promise.all(
      processedContent.images.map(async img => {
        const response = await uploadFile.mutateAsync(img.file);
        return {
          name: img.name,
          filename: response.data.data.filename,
          url: response.data.data.url,
        };
      }),
    );
    console.log('Обработал к')

    // 🔹 4. Загружаем медиафайлы
    const uploadedMediaFiles: IMedia[] = await Promise.all(
      mediaFiles.map(async file => {
        const response = await uploadFile.mutateAsync(file.file);
        return {
          name: '',
          filename: response.data.data.filename,
          url: response.data.data.url,
        };
      }),
    );
    console.log('Обработал контент')

    // 🔹 5. Создаем объект поста
    postCreate.mutate({
      channelId: id ?? '',
      previewImage: previewImageData,
      title: title,
      content: processedContent.content,
      contentImages: uploadedImages,
      tags: selectTagIds,
      mediaFiles: uploadedMediaFiles,
    });
  };

  return (
    <>
      <FormBox>
        <Heading1>{l.postCreation}</Heading1>
        <Group justify="center" grow>
          <Flex direction="column" gap="md">
            <TextInput
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>{l.postName}</Heading4>}
              placeholder={l.enterPostName}
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <FileInput
              accept="image/png,image/jpeg"
              clearable
              size="md"
              mt="sm"
              radius="lg"
              label={<Heading4 mb={5}>{l.imagePreview}</Heading4>}
              value={previewImg}
              onChange={setPreviewImg}
            />
            <div style={{ margin: '15px 0 0 0' }} id="Редактор">
              <Input.Wrapper
                label={<Heading4 mb={5}>{l.postContent}</Heading4>}
                size="20px"
                pb="5px"
              />
              <Editor
                apiKey={apiKey} // Придумать как не хранить его на фронте
                value={content}
                onEditorChange={handleEditorChange}
                init={{
                  min_height: 400,
                  autoresize_bottom_margin: 40,
                  width: '100%',
                  plugins: 'link image media autoresize',
                  menubar: 'format table tools help',
                  menu: {
                    format: {
                      title: 'Format',
                      items:
                        'superscript subscript codeformat | styles blocks fontfamily fontsize lineheight | forecolor backcolor | language | removeformat',
                    },
                    tools: {
                      title: 'Tools',
                      items:
                        'spellchecker spellcheckerlanguage | a11ycheck code wordcount',
                    },
                    table: {
                      title: 'Table',
                      items:
                        'inserttable | cell row column | advtablesort | tableprops deletetable',
                    },
                  },
                  toolbar:
                    'undo redo | bold italic underline strikethrough| alignleft aligncenter alignright | link image media',
                  automatic_uploads: true,
                  file_picker_types: 'image',
                  images_upload_handler: async (blobInfo: BlobInfo) => {
                    return new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onload = () => resolve(reader.result as string);
                      reader.onerror = error => reject(error);
                      reader.readAsDataURL(blobInfo.blob());
                    });
                  },
                  media_live_embeds: true, // Поддержка вставки видео из ссылок
                }}
              />
            </div>
            <Input.Wrapper
              label={<Heading4>{l.selectTags}</Heading4>}
              size="20px"
            />
            <TagMultiSelect
              tags={tags}
              categories={categories}
              selectedTagIds={selectTagIds}
              onChange={setSelectTagIds}
            />
            <FileLoader files={mediaFiles} setFiles={setMediaFiles} />
            <Flex
              mih={50}
              gap="xs"
              justify="center"
              align="center"
              direction={{ base: 'column', xs: 'row' }}
            >
              <GreyButton
                mt="sm"
                w={'fit-content'}
                onClick={() => navigate(`/channel/${id}`)}
              >
                {l.btnCancel}
              </GreyButton>
              <BlueButton
                type="submit"
                mt="sm"
                w={'fit-content'}
                onClick={handleSubmit}
              >
                {l.btnConfirm}
              </BlueButton>
            </Flex>
          </Flex>
        </Group>
      </FormBox>
    </>
  );
};

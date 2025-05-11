import { useState } from 'react';
import { useUploadFile } from '@hooks/useUploadFile.ts';
import { Button, FileInput } from '@mantine/core';
import { ChannelItemPage } from '@modules/channel';
import { ChannelItem } from '@modules/channel/components/ChannelItem/ChannelItem.tsx';
import { channelsExamples } from '@modules/channel/constants/channelsExamples.ts';
import { PostItem, PostItemPage } from '@modules/posts';
// удалить

export const ForTest2 = () => {
  const [myFile, setMyFile] = useState<File | null>(null);
  const fileLoader = useUploadFile();

  return (
    <>
      <h2>Доп тест</h2>
      <FileInput value={myFile} onChange={setMyFile} />
      <Button onClick={() => fileLoader.mutate(myFile)}>Отправить</Button>
      <ChannelItem
        subsCount={channelsExamples[0].subsCount}
        id={channelsExamples[0].id}
        category={channelsExamples[0].category}
        description={channelsExamples[0].description}
        imageLogo={channelsExamples[0].imageLogo}
        ownerId={channelsExamples[0].ownerId}
        name={channelsExamples[0].name}
      />
      <PostItemPage />
    </>
  );
};

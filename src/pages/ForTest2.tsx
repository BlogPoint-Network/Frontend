import { useState } from 'react';
import { useUploadFile } from '@hooks/useUploadFile.ts';
import { Button, FileInput } from '@mantine/core';
// удалить

export const ForTest2 = () => {
  const [myFile, setMyFile] = useState<File | null>(null);
  const fileLoader = useUploadFile();

  return (
    <>
      <h2>Доп тест</h2>
      <FileInput value={myFile} onChange={setMyFile} />
      <Button onClick={() => fileLoader.mutate(myFile)}>Отправить</Button>
    </>
  );
};

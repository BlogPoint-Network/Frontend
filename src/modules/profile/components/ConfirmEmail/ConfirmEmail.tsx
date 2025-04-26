import { FC, useState } from 'react';
import { Flex, Group, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEmailVerification } from '@modules/profile/hooks/useEmailVerification.ts';
import { useVerifyEmail } from '@modules/profile/hooks/useVerifyEmail.ts';
import { BlueButton, GreyButton, Heading3, Heading4 } from '@ui';

export const EditEmailCode: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);

  const confirmEmail = useEmailVerification();
  const verifyEmail = useVerifyEmail();

  const handleRequestCode = () => {
    confirmEmail.mutate(undefined, {
      onSuccess: data => {
        setMessage(data.data.message || 'Код отправлен!');
        setErrorMessage('');
      },
      onError: (error: Error) => {
        setErrorMessage(error.message || 'Ошибка при отправке кода.');
      },
    });
  };

  const handleVerifyCode = () => {
    verifyEmail.mutate(code, {
      onSuccess: data => {
        setMessage(data.data.message || 'Почта подтверждена!');
        setEmailVerified(true);
        setErrorMessage('');
        close();
      },
      onError: (error: Error) => {
        setErrorMessage(error.message || 'Неверный код.');
      },
    });
  };

  return (
    <>
      {/* Модалка подтверждения */}
      <Modal
        opened={opened}
        onClose={close}
        title={<Heading3>Подтверждение почты</Heading3>}
      >
        <Flex direction="column" gap="10px">
          {message && <p style={{ color: 'green' }}>{message}</p>}
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

          <TextInput
            placeholder="Введите код из email"
            label={<Heading4>Код подтверждения</Heading4>}
            value={code}
            onChange={e => setCode(e.currentTarget.value)}
          />

          <Group justify="flex-end">
            <GreyButton onClick={close}>Отменить</GreyButton>
            <BlueButton onClick={handleVerifyCode}>Подтвердить</BlueButton>
          </Group>
        </Flex>
      </Modal>

      <Flex direction={'column'} gap={'15px'} align={'start'}>
        <Heading4 mt={'-15px'} mb={'-5px'}>
          Верификация почты
        </Heading4>
        <BlueButton
          style={{ width: 'auto' }}
          onClick={() => {
            handleRequestCode();
            open();
          }}
          disabled={emailVerified}
        >
          {emailVerified ? 'Почта подтверждена' : 'Подтвердить почту'}
        </BlueButton>
      </Flex>
    </>
  );
};

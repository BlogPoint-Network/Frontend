import { useState } from 'react';
import { skyBlueColor } from '@constants';
import { TextInput } from '@mantine/core';
import { useEmailVerification } from '@modules/profile/hooks/useEmailVerification.ts';
import { useVerifyEmail } from '@modules/profile/hooks/useVerifyEmail.ts';
import { BlueButton, Heading4 } from '@ui';

export const ConfirmEmail = () => {
  const confirmEmail = useEmailVerification();
  const verifyEmail = useVerifyEmail();

  const [code, setCode] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleRequestCode = () => {
    confirmEmail.mutate(undefined, {
      onSuccess: data => {
        setMessage(data.data.message || 'Код отправлен!');
        setShowInput(true);
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
        setMessage(data.data.message || 'Почта успешно подтверждена!');
        setShowInput(false);
      },
      onError: (error: Error) => {
        setErrorMessage(error.message || 'Неверный код.');
      },
    });
  };

  return (
    <>
      <Heading4
        style={{
          color: isHovered ? skyBlueColor : 'black',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleRequestCode}
      >
        Нажмите, чтобы подтвердить почту
      </Heading4>

      {message && <p style={{ color: 'green' }}>{message}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      {showInput && (
        <div>
          <TextInput
            placeholder="Введите код"
            value={code}
            onChange={e => setCode(e.target.value)}
          />
          <BlueButton onClick={handleVerifyCode}>Подтвердить код</BlueButton>
        </div>
      )}
    </>
  );
};

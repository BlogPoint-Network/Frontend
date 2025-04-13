import { ConfirmEmail, ProfileForm } from '@modules/profile';
import { EditProfileImage } from '@modules/profile/components/EditProfileImage/EditProfileImage.tsx';
import { EditProfileInfo } from '@modules/profile/components/EditProfileInfo/EditProfileInfo.tsx';
import { EditProfilePassword } from '@modules/profile/components/EditProfilePassword/EditProfilePassword.tsx';
import { useProfile } from '@modules/profile/hooks/useProfile.ts';

export const Profile = () => {
  const { data: user, isLoading, error } = useProfile();

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <ProfileForm user={user}>
      <EditProfileImage />
      <EditProfileInfo user={user} />
      <ConfirmEmail />
      <EditProfilePassword />
    </ProfileForm>
  );
};

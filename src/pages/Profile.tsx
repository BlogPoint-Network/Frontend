import { ConfirmEmail, ProfileForm } from '@modules/profile';
import { EditProfileImage } from '@modules/profile/components/EditProfileImage/EditProfileImage.tsx';
import { EditProfileInfo } from '@modules/profile/components/EditProfileInfo/EditProfileInfo.tsx';
import { EditProfilePassword } from '@modules/profile/components/EditProfilePassword/EditProfilePassword.tsx';
import { useGetProfile } from '@modules/profile/hooks/useGetProfile.ts';

export const Profile = () => {
  const userController = useGetProfile();
  const currentUser = userController.data?.data.data;

  if (userController.isLoading) return <p>Загрузка...</p>;
  if (userController.error)
    return <p>Ошибка: {userController.error.message}</p>;

  return (
    <ProfileForm user={currentUser}>
      <EditProfileImage />
      <EditProfileInfo user={currentUser} />
      <ConfirmEmail />
      <EditProfilePassword />
    </ProfileForm>
  );
};

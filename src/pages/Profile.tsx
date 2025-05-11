import { ConfirmEmail, ProfileForm } from '@modules/profile';
import { ChooseLanguage } from '@modules/profile/components/ChooseLanguage/ChooseLanguage.tsx';
import { EditProfileImage } from '@modules/profile/components/EditProfileImage/EditProfileImage.tsx';
import { EditProfileInfo } from '@modules/profile/components/EditProfileInfo/EditProfileInfo.tsx';
import { EditProfilePassword } from '@modules/profile/components/EditProfilePassword/EditProfilePassword.tsx';
import { useGetProfile } from '@modules/profile/hooks/useGetProfile.ts';
import { useLanguage } from '@hooks/useLanguage.ts';

export const Profile = () => {
  const { l } = useLanguage();
  const userController = useGetProfile();
  const currentUser = userController.data?.data.data;

  if (userController.error)
    return (
      <p>
        {l.error}: {userController.error.message}
      </p>
    );

  return (
    <ProfileForm user={currentUser}>
      <EditProfileImage />
      <EditProfileInfo user={currentUser} />
      <ConfirmEmail />
      <EditProfilePassword />
      <ChooseLanguage user={currentUser} />
    </ProfileForm>
  );
};

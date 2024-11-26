import { useContext } from 'react';
import { ProfileForm } from '@modules/profile';
import { EditProfileImage } from '@modules/profile/components/EditProfileImage/EditProfileImage.tsx';
import { EditProfileInfo } from '@modules/profile/components/EditProfileInfo/EditProfileInfo.tsx';
import { EditProfilePassword } from '@modules/profile/components/EditProfilePassword/EditProfilePassword.tsx';

// import { ProfileForm, EditProfilePassword, EditProfileInfo, EditProfileImage } from '@modules/profile';
import { ProfileContext } from '../app/context';

export const Profile = () => {
  const profile = useContext(ProfileContext);

  return (
    <ProfileForm>
      <EditProfileImage />
      <EditProfileInfo user={profile?.user ?? undefined} />
      <EditProfilePassword />
    </ProfileForm>
  );
};

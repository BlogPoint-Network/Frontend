import { ProfileForm } from '@modules/profile';
import { EditProfileImage } from '@modules/profile/components/EditProfileImage/EditProfileImage.tsx';
import { EditProfileInfo } from '@modules/profile/components/EditProfileInfo/EditProfileInfo.tsx';
import { EditProfilePassword } from '@modules/profile/components/EditProfilePassword/EditProfilePassword.tsx';
import { useProfile } from '@modules/profile/hooks/useProfile.ts';

export const Profile = () => {
  const profile = useProfile();
  console.log(profile?.data?.data);
  // if (isPending) return <p>Загрузка...</p>;
  // if (isError) return <p>Ошибка загрузки профиля</p>;



  return (
    <ProfileForm user={profile?.data?.data ?? undefined}>
      <EditProfileImage />
      <EditProfileInfo user={profile?.data?.data ?? undefined} />
      <EditProfilePassword />
    </ProfileForm>
  );
};

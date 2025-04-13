// import { FC, ReactNode, useContext, useEffect, useLayoutEffect } from 'react';
// import { Loader } from '@mantine/core';
// import { useProfile } from '@modules/profile/hooks/useProfile';
//
// interface IProfileLoaderProps {
//   children?: ReactNode;
// }
//
// export const ProfileLoader: FC<IProfileLoaderProps> = props => {
//   const profileManager = useProfile();
//
//   useLayoutEffect(() => {
//     if (profileController) profileController.infoUserMutation.mutate();
//   }, []);
//
//   useEffect(() => {}, [profileController?.infoUserMutation.isIdle]);
//
//   if (profileController?.infoUserMutation.isPending) return <Loader />;
//   else return <>{props.children}</>;
// };

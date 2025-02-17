import { useState } from 'react';
import { AuthService } from '@api';
import { IUser } from '@app-types';
//import { useMutation } from '@tanstack/react-query';

export const useProfile = () => {
  const [user, setUser] = useState<IUser | null>(null);

  async function infoUser() {
    try {
      const response = await AuthService.infoUserAuth();
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const loginProfile = async (login: string, password: string) => {
    try {
      const response = await AuthService.loginUserAuth(login, password);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e);
    }
  };

  async function registrationProfile(
    email: string,
    login: string,
    password: string,
  ) {
    try {
      await AuthService.registerUserAuth(login, email, password);
    } catch (e) {
      console.log(e);
    }
  }

  function logoutProfile() {
    try {
      localStorage.removeItem('token');
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteProfile() {
    try {
      await AuthService.deleteUserAuth();
      localStorage.removeItem('token');
      setUser(null);
    } catch (e) {
      console.log(e);
    }
  }

  async function infoProfile() {
    try {
      const response = await AuthService.infoUserAuth();
      setUser(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  const editProfileImg = async (img: File | null) => {
    try {
      await AuthService.editProfileImgAuth(img);
    } catch (e) {
      console.log(e);
    }
  };
  const editProfileInfo = async (email: string, login: string) => {
    try {
      await AuthService.editProfileInfoAuth(login, email);
    } catch (e) {
      console.log(e);
    }
  };
  const editProfilePassword = async (
    oldPassword: string,
    newPassword: string,
  ) => {
    try {
      await AuthService.editProfilePasswordAuth(oldPassword, newPassword);
    } catch (e) {
      console.log(e);
    }
  };

  // const infoUserMutation = useMutation({
  //   mutationFn: async () => {
  //     return await AuthService.infoUserAuth();
  //   },
  //   onSuccess: response => {
  //     setUser(response.data);
  //   },
  // });

  return {
    loginProfile,
    registrationProfile,
    logoutProfile,
    editProfileImg,
    editProfilePassword,
    editProfileInfo,
    infoProfile,
    user,
    infoUser,
    deleteProfile
  };
};

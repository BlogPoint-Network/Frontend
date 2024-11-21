import { ValidationType } from '@app-types';
import { ValidationTypeOneParameter } from '@app-types/ValidationTypeOneParameter.ts';
import { IAuthData } from '@modules/profile/types/IAuthData.ts';
import { IRegistrationData } from '@modules/profile/types/IRegistrationData.ts';

export const validationLogin: ValidationTypeOneParameter<
  IAuthData['login']
> = value => {
  return value.length < 6 ? 'Логин должен состоять болше чем 6 символов' : null;
};

export const validationEmail: ValidationTypeOneParameter<
  IAuthData['email']
> = value => {
  return /^\S+@\S+$/.test(value) ? null : 'Неправильная почта';
};

export const validationPassword: ValidationTypeOneParameter<
  IAuthData['password']
> = value => {
  return value.length < 8 ? 'Пороль должен состоять из 8 символов' : null;
};

export const validationRepeatPassword: ValidationType<
  IAuthData['password'],
  Pick<IRegistrationData, 'password'>
> = (value, values) => {
  return value !== values.password ? 'Пароль не совпадает' : null;
};

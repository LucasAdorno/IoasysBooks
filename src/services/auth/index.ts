import {api} from '../api';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISignInCredentials {
  email: string;
  password: string;
}

export const SignIn = async (user: ISignInCredentials): Promise<void> => {
  try {
    const {headers} = await api.post('auth/sign-in', user);

    await AsyncStorage.setItem('@IOASYS:token', headers['authorization']);
    await AsyncStorage.setItem(
      '@IOASYS:refreshToken',
      headers['refresh-token'],
    );

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export const TokenRefresh = async () => {
  try {
    const token = await AsyncStorage.getItem('@IOASYS:token');
    const refreshToken = await AsyncStorage.getItem('@IOASYS:refreshToken');

    const {headers} = await api.post(
      'auth/refresh-token',
      {refreshToken},
      {
        headers: {Authorization: `Bearer ${token}`},
      },
    );

    await AsyncStorage.setItem('@IOASYS:token', headers['authorization']);
    await AsyncStorage.setItem(
      '@IOASYS:refreshToken',
      headers['refresh-token'],
    );

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

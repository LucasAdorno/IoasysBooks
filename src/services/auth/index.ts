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

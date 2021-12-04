import {api} from '../api';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISignInCredentials {
  email: string;
  password: string;
}

export const SignIn = async (user: ISignInCredentials): Promise<void> => {
  try {
    const data = await api.post('auth/sign-in', user);

    // await AsyncStorage.setItem('@IOASYS:token', authorization);
    // await AsyncStorage.setItem('@IOASYS:refreshToken', refreshToken);

    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

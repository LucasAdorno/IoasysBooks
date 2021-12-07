import {api} from '../api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {BookDTO} from '../../dtos/bookDTO';

export const getBooks = async (
  page = 1,
  category?: string,
  title?: string,
): Promise<{data: BookDTO[]}> => {
  try {
    const token = await AsyncStorage.getItem('@IOASYS:token');

    const {data: response} = await api.get(
      `books?page=${page}${title && '&title=' + title}`,
      {
        headers: {Authorization: `Bearer ${token}` || ''},
      },
    );

    const {data} = response;

    return Promise.resolve({data});
  } catch (error) {
    return Promise.reject();
  }
};

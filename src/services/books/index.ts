import {api} from '../api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {BookDTO} from '../../dtos/bookDTO';

export const getBooks = async (
  actualPage = 1,
  category?: string,
  title?: string,
): Promise<{data: BookDTO[]; totalPages: number; page: number}> => {
  try {
    const token = await AsyncStorage.getItem('@IOASYS:token');

    const {data: response} = await api.get(
      `books?page=${actualPage}${title && '&title=' + title}${
        category && '&category=' + category
      }`,
      {
        headers: {Authorization: `Bearer ${token}` || ''},
      },
    );

    const {data, totalPages, page} = response;

    return Promise.resolve({data, totalPages, page});
  } catch (error) {
    return Promise.reject();
  }
};

export const getBook = async (bookId: string): Promise<{data: BookDTO}> => {
  const token = await AsyncStorage.getItem('@IOASYS:token');

  try {
    const {data} = await api.get(`books/${bookId}`, {
      headers: {Authorization: `Bearer ${token}` || ''},
    });

    return Promise.resolve({data});
  } catch (error) {
    return Promise.reject(error);
  }
};

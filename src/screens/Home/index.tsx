import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import {BookCard} from '../../components/BookCard';
import {HomeHeader} from '../../components/HomeHeader';
import {SearchInput} from '../../components/SearchInput';

import {BookDTO} from '../../dtos/bookDTO';
import {getBooks} from '../../services/books';

import {Container, CustomFlatList} from './styles';

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookDTO[]>({} as BookDTO[]);
  const [search, setSearch] = useState('');

  const listBooks = async () => {
    try {
      const {data} = await getBooks();
      setBooks(data);

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    listBooks();
  }, []);

  const handleFilter = async (e: string) => {
    try {
      const {data} = await getBooks(1, ``, e);
      setBooks(data);

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return (
    <Container>
      <HomeHeader />
      <SearchInput
        placeholder="Procure um livro"
        value={search}
        onChangeText={e => {
          setSearch(e);
          handleFilter(e);
        }}
      />
      <CustomFlatList
        data={books}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => <BookCard book={item} />}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
      />
    </Container>
  );
};

export {Home};

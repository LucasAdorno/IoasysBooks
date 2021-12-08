import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';

import {BookCard} from '../../components/BookCard';
import {HomeHeader} from '../../components/HomeHeader';
import Modal from '../../components/Modal';
import {SearchInput} from '../../components/SearchInput';

import {BookDTO} from '../../dtos/bookDTO';
import {getBooks} from '../../services/books';

import {Container, CustomFlatList, FilterSection, SettigsIcon} from './styles';

const Home: React.FC = () => {
  const [books, setBooks] = useState<BookDTO[]>([]);
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const [loading, setLoading] = useState(false);

  const listBooks = async (actualPage = 1) => {
    try {
      setLoading(true);
      const {data, totalPages, page} = await getBooks(
        actualPage,
        category,
        search,
      );
      setBooks(state => [...state, ...data]);
      setPagesCount(totalPages);
      setPage(page);

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    listBooks();
  }, []);

  const handleFilter = async (e: string) => {
    try {
      setLoading(true);
      const {data, totalPages, page} = await getBooks(1, category, e);
      setBooks(data);

      setBooks(data);
      setPagesCount(totalPages);
      setPage(page);

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <HomeHeader />
      <FilterSection>
        <SearchInput
          placeholder="Procure um livro"
          value={search}
          onChangeText={e => {
            setSearch(e);
            handleFilter(e);
          }}
        />
        <SettigsIcon name="options-outline" size={42} />
      </FilterSection>
      <CustomFlatList
        data={books}
        keyExtractor={(item: any) => item.id}
        renderItem={({item}: any) => <BookCard book={item} />}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        onEndReached={() => listBooks(page + 1)}
        ListFooterComponent={loading ? <ActivityIndicator /> : <></>}
      />
    </Container>
  );
};

export {Home};

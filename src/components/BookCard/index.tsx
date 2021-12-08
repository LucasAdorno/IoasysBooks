import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BookDTO} from '../../dtos/bookDTO';

import {
  Container,
  BookImage,
  Content,
  FirstSection,
  Title,
  Author,
  LastSection,
  SubTitle,
} from './styles';
import {RootStackParamList} from '../../routes';

interface IBookCard {
  book: BookDTO;
}

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const BookCard: React.FC<IBookCard> = ({book}) => {
  const {navigate} = useNavigation<homeScreenProp>();

  const handleGoToInternal = () => {
    return navigate('InternalBook', {bookId: book.id});
  };

  return (
    <Container
      style={{
        shadowColor: 'rgba(84, 16, 95, 0.13)',
        elevation: 14,
      }}
      onPress={handleGoToInternal}>
      <BookImage source={{uri: book.imageUrl}} resizeMode="contain" />
      <Content>
        <FirstSection>
          <Title>{book.title}</Title>
          <Author>{book.authors.join(', ')}</Author>
        </FirstSection>
        <LastSection>
          <SubTitle>{book.pageCount} páginas</SubTitle>
          <SubTitle>Editora {book.publisher}</SubTitle>
          <SubTitle>Publicado em {book.published}</SubTitle>
        </LastSection>
      </Content>
    </Container>
  );
};

export {BookCard};

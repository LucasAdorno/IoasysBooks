import React from 'react';
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

interface IBookCard {
  book: BookDTO;
}

const BookCard: React.FC<IBookCard> = ({book}) => {
  return (
    <Container
      style={{
        shadowColor: 'rgba(84, 16, 95, 0.13)',
        elevation: 14,
      }}>
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

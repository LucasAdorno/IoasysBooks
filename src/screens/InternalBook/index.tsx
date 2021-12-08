import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {BookDTO} from '../../dtos/bookDTO';
import {getBook} from '../../services/books';

import {
  Container,
  BookImage,
  BookTitle,
  BookAuthors,
  SectionTitle,
  InformationRow,
  InformationBold,
  InformationRegular,
  CircleIcon,
  ArrowBack,
  Content,
  Quotes,
  Description,
} from './styles';

const InternalBook: React.FC<{route: any}> = ({route}) => {
  const {goBack} = useNavigation();

  const {bookId} = route.params;

  const [book, setBook] = useState<BookDTO>();

  const getInfoOfBook = async () => {
    try {
      const {data} = await getBook(bookId);

      setBook(data);
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useLayoutEffect(() => {
    getInfoOfBook();
  }, []);

  const handleGoBack = () => {
    return goBack();
  };

  return (
    <Container>
      <CircleIcon onPress={handleGoBack}>
        <ArrowBack name="arrow-back" size={34} />
      </CircleIcon>

      <Content>
        <BookImage source={{uri: book?.imageUrl}} resizeMode="contain" />
        <BookTitle>{book?.title}</BookTitle>
        <BookAuthors>{book?.authors.join(', ')}</BookAuthors>
        <SectionTitle>INFORMAÇÕES</SectionTitle>
        <InformationRow>
          <InformationBold>Páginas</InformationBold>
          <InformationRegular>{book?.pageCount} páginas</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>Editora</InformationBold>
          <InformationRegular>{book?.publisher}</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>Publicação</InformationBold>
          <InformationRegular>{book?.published}</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>Idioma</InformationBold>
          <InformationRegular>{book?.language}</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>Título original</InformationBold>
          <InformationRegular>{book?.title}</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>ISBN-10</InformationBold>
          <InformationRegular>{book?.isbn10}</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>ISBN-13</InformationBold>
          <InformationRegular>{book?.isbn13}</InformationRegular>
        </InformationRow>
        <InformationRow>
          <InformationBold>Categoria</InformationBold>
          <InformationRegular>{book?.category}</InformationRegular>
        </InformationRow>
        <SectionTitle>RESENHA DA EDITORA</SectionTitle>
        <Description>
          <Quotes name="quote-a-right" size={22} /> {book?.description}
        </Description>
      </Content>
    </Container>
  );
};

export {InternalBook};

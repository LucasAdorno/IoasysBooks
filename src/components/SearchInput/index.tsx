import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, CustomTextInput, SearchIcon} from './styles';

interface ISearchInput extends Partial<TextInputProps> {}

const SearchInput: React.FC<ISearchInput> = ({...rest}) => {
  return (
    <Container>
      <CustomTextInput {...rest} />
      <SearchIcon name="search" size={32} />
    </Container>
  );
};

export {SearchInput};

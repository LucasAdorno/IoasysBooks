import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, Content, Label, TextInputContent} from './styles';

export interface IInput extends TextInputProps {
  label?: string;
}

const Input: React.FC<IInput> = ({children, label, ...rest}) => {
  return (
    <Container>
      <Content>
        <Label>{label}</Label>
        <TextInputContent {...rest} />
      </Content>

      {children}
    </Container>
  );
};

export default Input;

import React from 'react';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Title} from './styles';

interface ICustomButton extends Partial<typeof TouchableOpacity> {
  text: string;
  loading: boolean;
}

const CustomButton: React.FC<ICustomButton> = ({text, loading, ...rest}) => {
  const {colors: colorsOfTheme} = useTheme();

  return (
    <Container activeOpacity={0.5} {...rest}>
      {loading ? (
        <ActivityIndicator color={colorsOfTheme.vine} size={22} />
      ) : (
        <Title>{text}</Title>
      )}
    </Container>
  );
};

export {CustomButton};

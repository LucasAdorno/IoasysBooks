import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  flex: 1;
  height: 46px;

  align-items: center;
  justify-content: center;

  border-radius: 32px;
  border: 1px solid ${({theme}) => theme.colors.vine};

  background-color: ${({theme}) => theme.colors.white_background};
`;

export const Title = styled.Text`
  font-family: 'Heebo-Medium';
  font-size: 18px;

  color: ${({theme}) => theme.colors.vine};
`;

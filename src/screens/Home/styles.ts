import {FlatList} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 22px 16px;

  background-color: ${({theme}) => theme.colors.background};
`;

export const CustomFlatList = styled(FlatList)`
  margin-top: 22px;
`;

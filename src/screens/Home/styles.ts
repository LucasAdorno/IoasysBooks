import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;

  padding: 22px 16px;

  background-color: ${({theme}) => theme.colors.background};
`;

export const CustomFlatList = styled(FlatList)`
  margin-top: 22px;
`;

export const FilterSection = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SettigsIcon = styled(Ionicons)``;

import styled from 'styled-components/native';
import {TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 85%;
  height: 64px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 2px 12px;

  border: 2px solid ${({theme}) => theme.colors.dark_border};
  border-radius: 6px;
`;

export const CustomTextInput = styled(TextInput)`
  flex: 1;

  font-family: 'Heebo-Bold';
  font-size: 18px;
`;

export const SearchIcon = styled(MaterialIcons)``;

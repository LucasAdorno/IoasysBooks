import styled from 'styled-components/native';

import {TextInput} from 'react-native';

export const Container = styled.View`
  width: 100%;
  height: 72px;

  margin-top: 22px;
  padding: 4px 12px;
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({theme}) => theme.colors.input_background};
`;

export const Content = styled.View`
  width: 65%;
  height: 100%;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-family: 'Heebo-Regular';

  color: ${({theme}) => theme.colors.white_text};
  opacity: 0.5;
`;

export const TextInputContent = styled(TextInput)`
  flex: 1;

  font-size: 16px;

  color: ${({theme}) => theme.colors.white_text};
`;

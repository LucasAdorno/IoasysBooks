import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;

  border-radius: 16px;
  border: 1px solid ${({theme}) => theme.colors.vine};
`;

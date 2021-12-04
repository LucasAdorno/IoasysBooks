import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;

  padding: 0 32px;
`;

export const TitleShell = styled.View`
  flex-direction: row;
  align-items: center;

  margin-bottom: 22px;
`;

export const Logo = styled.Image`
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Heebo-Light';

  color: ${({theme}) => theme.colors.white_text};
`;

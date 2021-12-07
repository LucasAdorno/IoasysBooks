import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<any>`
  width: 100%;

  height: 220px;

  padding: 22px 10px;

  flex-direction: row;
  align-items: center;

  border-radius: 8px;

  background-color: ${({theme}) => theme.colors.white_background};
`;

export const BookImage = styled.Image`
  width: 30%;
  margin-right: 22px;
  aspect-ratio: 0.75;
`;

export const Content = styled.View`
  width: 60%;
  height: 100%;
  justify-content: space-between;
`;

export const FirstSection = styled.View``;

export const Title = styled.Text`
  font-family: 'Heebo-Medium';
  font-size: 20px;

  color: ${({theme}) => theme.colors.black_text};
`;

export const Author = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 16px;

  color: ${({theme}) => theme.colors.vine};
`;

export const LastSection = styled.View``;

export const SubTitle = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 16px;

  color: ${({theme}) => theme.colors.gray_text};
`;

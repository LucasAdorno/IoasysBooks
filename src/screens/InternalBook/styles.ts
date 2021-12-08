import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const Container = styled.ScrollView`
  flex: 1;

  padding: 8px;

  background-color: ${({theme}) => theme.colors.white_background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 22px;
`;

export const CircleIcon = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.white_background};

  border-radius: 24px;
  border: 2px solid ${({theme}) => theme.colors.dark_border};
`;

export const ArrowBack = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.black_text};
`;

export const BookImage = styled.Image`
  width: 100%;
  aspect-ratio: 0.85;
`;

export const BookTitle = styled.Text`
  margin-top: 16px;

  font-family: 'Heebo-Bold';

  font-size: 32px;

  color: ${({theme}) => theme.colors.black_text};
`;

export const BookAuthors = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 18px;

  margin-bottom: 32px;

  color: ${({theme}) => theme.colors.vine};
`;

export const SectionTitle = styled.Text`
  font-family: 'Heebo-Bold';
  font-size: 16px;

  margin: 16px 0;

  color: ${({theme}) => theme.colors.black_text};
`;

export const InformationRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InformationBold = styled.Text`
  font-family: 'Heebo-Bold';
  font-size: 16px;

  color: ${({theme}) => theme.colors.black_text};
`;

export const InformationRegular = styled.Text`
  font-family: 'Heebo-Regular';
  font-size: 16px;

  color: ${({theme}) => theme.colors.black_text};
`;

export const Description = styled.Text`
  text-align: justify;

  font-family: 'Heebo-Regular';
  font-size: 16px;

  line-height: 26px;
`;

export const Quotes = styled(Fontisto)`
  color: ${({theme}) => theme.colors.dark_border};
`;

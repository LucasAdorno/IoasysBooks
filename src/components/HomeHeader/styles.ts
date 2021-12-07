import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`;

export const LeftContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image`
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: 'Heebo-Light';

  color: ${({theme}) => theme.colors.black_text};
`;

export const RightContent = styled.TouchableOpacity`
  width: 48px;
  height: 48px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.background};

  border-radius: 24px;
  border: 2px solid ${({theme}) => theme.colors.dark_border};
`;

export const LogoutIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.colors.black_text};
`;

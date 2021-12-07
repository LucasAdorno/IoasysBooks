import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  LeftContent,
  Logo,
  LogoutIcon,
  RightContent,
  Title,
} from './styles';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../routes';

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeHeader: React.FC = () => {
  const {navigate} = useNavigation<homeScreenProp>();

  const handleLogout = async () => {
    try {
      AsyncStorage.clear();

      navigate('Login');

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  };

  return (
    <Container>
      <LeftContent>
        <Logo source={require('../../assets/images/dark-logo.png')} />
        <Title>Books</Title>
      </LeftContent>
      <RightContent onPress={handleLogout}>
        <LogoutIcon name="logout" size={26} />
      </RightContent>
    </Container>
  );
};

export {HomeHeader};

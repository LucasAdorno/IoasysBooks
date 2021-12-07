import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/auth/Login';
import {Home} from './screens/Home';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Routes: React.FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Routes};

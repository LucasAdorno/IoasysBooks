import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/auth/Login';
import {Home} from './screens/Home';
import {InternalBook} from './screens/InternalBook';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  InternalBook: {bookId: string};
};

const Routes: React.FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
        <Screen name="InternalBook" component={InternalBook} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Routes};

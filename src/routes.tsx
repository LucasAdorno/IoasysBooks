import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from './screens/auth/Login';

const Routes: React.FC = () => {
  const {Navigator, Screen} = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
};

export {Routes};

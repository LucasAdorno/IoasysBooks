import React, {useState} from 'react';
import {Alert} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {CustomButton} from '../../../components/CustomButton';
import {Input} from '../../../components/Input';

import {SignIn} from '../../../services/auth';

import {Container, Logo, Title, TitleShell} from './styles';

import {RootStackParamList} from '../../../routes';

type loginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {navigate} = useNavigation<loginScreenProp>();

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await SignIn({
        email,
        password,
      });

      setLoading(false);

      navigate('Home');

      return Promise.resolve();
    } catch (err) {
      setLoading(false);

      Alert.alert('Credenciais inválidas');

      return Promise.reject(err);
    }
  };

  return (
    <Container source={require('../../../assets/images/login-woman.png')}>
      <TitleShell>
        <Logo source={require('../../../assets/images/light-logo.png')} />
        <Title>Books</Title>
      </TitleShell>
      <Input
        value={email}
        onChangeText={setEmail}
        label="Email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        label="Senha"
        autoCapitalize="none"
        secureTextEntry>
        <CustomButton loading={loading} text="Entrar" onPress={handleSignIn} />
      </Input>
    </Container>
  );
};

export {Login};

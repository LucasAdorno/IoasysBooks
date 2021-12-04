import React, {useState} from 'react';

import {CustomButton} from '../../../components/Button';
import {Input} from '../../../components/Input';

import {SignIn} from '../../../services/auth';

import {Container, Logo, Title, TitleShell} from './styles';

const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      setLoading(true);
      await SignIn({
        email,
        password,
      });

      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    } finally {
      setLoading(false);
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

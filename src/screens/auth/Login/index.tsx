import React from 'react';
import Input from '../../../components/Input';

import {Container, Logo, Title, TitleShell} from './styles';

const Login: React.FC = () => {
  return (
    <Container source={require('../../../assets/images/login-woman.png')}>
      <TitleShell>
        <Logo source={require('../../../assets/images/light-logo.png')} />
        <Title>Books</Title>
      </TitleShell>
      <Input label="Email" autoCapitalize="none" keyboardType="email-address" />
      <Input label="Senha" autoCapitalize="none" secureTextEntry />
    </Container>
  );
};

export {Login};

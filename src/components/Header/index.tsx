import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../GlobalStyles';
import * as S from './styles';
import { Button } from '../Button';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <S.Header>
      <Button iconName='search' />
      <S.HeaderText>{title}</S.HeaderText>
      <Button iconName='plus' iconPosition='RIGHT' />
    </S.Header>
  );
};

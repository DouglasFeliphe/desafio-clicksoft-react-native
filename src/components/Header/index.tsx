import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../GlobalStyles';
import * as S from './styles';
import { Button } from '../Button';

interface HeaderProps {
  title?: string;
  LeftButton?: any;
  RightButton?: any;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  LeftButton,
  RightButton,
}) => {
  return (
    <S.Header>
      {LeftButton ?? <Button iconName='search' />}
      <S.HeaderText>{title}</S.HeaderText>
      {RightButton ?? <Button iconName='plus' iconPosition='RIGHT' />}
    </S.Header>
  );
};

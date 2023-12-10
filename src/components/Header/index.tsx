import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Color } from '../../GlobalStyles';
import * as S from './styles';

interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <S.Header>
      <S.IconContainer>
        <Icon name='arrow-left' size={18} color={Color.colorBlueviolet} />
      </S.IconContainer>
      <S.HeaderText>{title}</S.HeaderText>
      <S.IconContainer>
        <Icon name='options' size={18} color={Color.colorBlueviolet} />
      </S.IconContainer>
    </S.Header>
  );
};

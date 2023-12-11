import { useNavigation } from '@react-navigation/native';
import React, { ReactElement, ReactNode } from 'react';
import { View } from 'react-native';

import * as S from './styles';
import { Button, ButtonProps } from '../Button';

interface HeaderProps {
  title?: string;
  LeftButton?: ReactElement<ButtonProps> | null;
  RightButton?: ReactElement<ButtonProps> | null;
  onPressLeftIcon?: () => void;
  onPressRightIcon?: () => void;
  children?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  LeftButton = null,
  RightButton = null,
  onPressLeftIcon,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <S.Header>
      {LeftButton ?? (
        <Button
          onPress={onPressLeftIcon ?? navigation.goBack}
          iconName="chevron-left"
        />
      )}
      <S.HeaderText>{title}</S.HeaderText>
      {RightButton ?? <View />}
      {children}
    </S.Header>
  );
};

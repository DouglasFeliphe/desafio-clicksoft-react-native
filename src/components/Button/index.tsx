import Icon from 'react-native-vector-icons/FontAwesome5';

import * as S from './styles';
import { Color } from '../../GlobalStyles';

export interface ButtonProps {
  onPress?: () => void;
  buttonText?: string | null;
  buttonBGColor?: string;
  noBorder?: boolean;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  iconPosition?: 'LEFT' | 'RIGHT';
}

export const Button = ({
  onPress,
  buttonBGColor,
  noBorder,
  buttonText = null,
  iconName = '',
  iconColor,
  iconSize,
  iconPosition = 'LEFT',
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      onPress={onPress}
      buttonBGColor={buttonBGColor}
      noBorder={noBorder}
    >
      {buttonText && iconPosition === 'RIGHT' && (
        <S.ButtonText>{buttonText}</S.ButtonText>
      )}
      <Icon
        name={iconName}
        size={iconSize ?? 18}
        color={iconColor ?? Color.colorBlueviolet}
      />
      {buttonText && iconPosition === 'LEFT' && (
        <S.ButtonText>{buttonText}</S.ButtonText>
      )}
    </S.ButtonWrapper>
  );
};

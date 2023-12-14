import Icon from 'react-native-vector-icons/FontAwesome5';
import { palette } from 'src/shared/theme/themes';

import * as S from './styles';

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
        color={iconColor ?? palette.primary}
      />
      {buttonText && iconPosition === 'LEFT' && (
        <S.ButtonText>{buttonText}</S.ButtonText>
      )}
    </S.ButtonWrapper>
  );
};

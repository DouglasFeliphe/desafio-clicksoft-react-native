import Icon from 'react-native-vector-icons/FontAwesome';
import { Color } from '../../GlobalStyles';
import { ButtonWrapper } from './styles';
import { Text } from 'react-native';

interface ButtonProps {
  onPress?: () => void;
  buttonText?: string;
  buttonBGColor?: string;
  noBorder?: boolean;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  iconPosition?: 'LEFT' | 'RIGHT';
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  buttonBGColor,
  noBorder: noBorder,
  buttonText = null,
  iconName = '',
  iconColor,
  iconSize,
  iconPosition = 'LEFT',
}) => {
  return (
    <ButtonWrapper
      onPress={onPress}
      buttonBGColor={buttonBGColor}
      noBorder={noBorder}
    >
      {buttonText && iconPosition === 'RIGHT' && <Text>{buttonText}</Text>}
      <Icon
        name={iconName}
        size={iconSize ?? 18}
        color={iconColor ?? Color.colorBlueviolet}
      />
      {buttonText && iconPosition === 'LEFT' && <Text>{buttonText}</Text>}
    </ButtonWrapper>
  );
};

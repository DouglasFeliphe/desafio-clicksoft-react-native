import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { Color } from '../../GlobalStyles';

export const ButtonWrapper = styled(TouchableOpacity)<{
  buttonBGColor?: string;
  noBorder?: boolean;
}>`
  background-color: ${({ buttonBGColor }) => buttonBGColor};
  padding: 8px;
  border: ${({ noBorder }) => (noBorder ? 'none' : '1px solid #e9e9ed')};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

export const ButtonText = styled.Text`
  color: ${Color.colorBlueviolet};
`;

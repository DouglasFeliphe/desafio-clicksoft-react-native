import { palette } from 'src/shared/theme/themes';
import styled from 'styled-components/native';

export const Header = styled.View`
  padding-top: 55px;
  padding-bottom: 22px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  elevation: 3;
  background-color: ${palette.primary};
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: 500;
  color: ${palette.white};
`;

export const IconContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

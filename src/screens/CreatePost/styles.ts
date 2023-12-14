import { palette } from '@shared/theme/themes';
import styled from 'styled-components/native';

export const InputContainer = styled.View`
  padding: 20px;
`;

export const InputLabel = styled.Text`
  background: #fff;
  width: 44px;
  color: ${palette.title};
  position: relative;
  top: 15px;
  left: 11px;
  padding: 5px;
  z-index: 999;
`;

export const InputField = styled.TextInput`
  background-color: #fff;
  color: ${palette.title};
  height: 40px;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  elevation: 3;
`;

export const InputTextArea = styled.TextInput`
  background-color: #fff;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  color: ${palette.title};

  text-align-vertical: top;
  elevation: 3;
`;

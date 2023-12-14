import { palette } from '@shared/theme/themes';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
`;

export const SelectLabel = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DropdownContainer = styled.TouchableOpacity`
  background-color: ${palette.white};
  color: ${palette.title};
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 5px;
  elevation: 3;
`;

export const DropdownText = styled.Text`
  font-size: 16px;
  color: ${palette.title};
`;

export const OptionItem = styled.Text`
  padding: 10px;
  font-size: 16px;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const OptionsContainer = styled(FlatList)`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  position: absolute;
  top: 180px;
  left: 20px;
  elevation: 3;
  overflow-y: scroll;
`;

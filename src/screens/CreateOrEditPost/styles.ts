import styled from 'styled-components/native';

export const InputContainer = styled.View`
  padding: 20px;
`;

export const InputLabel = styled.Text`
  background: #fff;
  width: 44px;
  color: #686777;
  position: relative;
  top: 15px;
  left: 11px;
  padding: 5px;
  z-index: 999;
`;

export const InputField = styled.TextInput`
  background-color: #fff;
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

  text-align-vertical: top;
  elevation: 3;
`;

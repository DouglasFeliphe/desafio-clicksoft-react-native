import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';

interface TextAreaProps {
  placeholder: string;
  value: string;
  onChangeText: (e: any) => void;
}

const TextAreaContainer = styled.View`
  padding: 25px;
`;

const Input = styled.TextInput`
  /* height: 150px; */
  /* padding: 10px; */
  /* border: 1px solid #ccc; */
  /* border-radius: 8px;
  margin-bottom: 20px; */
`;

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <TextAreaContainer>
      <Input
        multiline
        numberOfLines={4}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </TextAreaContainer>
  );
};

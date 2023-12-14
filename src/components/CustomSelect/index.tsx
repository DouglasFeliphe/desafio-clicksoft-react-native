import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';

import * as S from './styles';

interface CustomSelectProps {
  data: CustomData[];
  setSelectedValue: any;
  selectedValue: string;
  showLabel?: boolean;
  customDefaultText?: string;
}

type CustomData = {
  id: string | number;
  username: string;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  data,
  selectedValue,
  setSelectedValue,
  showLabel,
  customDefaultText = 'Choose',
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setShowDropdown(false);
  };

  const filteredDataByUserId = data.find((item) => item.id === selectedValue);

  return (
    <S.Container>
      {showLabel && <S.SelectLabel>Select an option:</S.SelectLabel>}
      <S.DropdownContainer onPress={() => setShowDropdown(true)}>
        <S.DropdownText>
          {filteredDataByUserId?.username || customDefaultText + '...'}
        </S.DropdownText>
      </S.DropdownContainer>
      <Modal
        visible={showDropdown}
        transparent
        animationType="fade"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableOpacity
          //   style={{ flex: 1, justifyContent: 'flex-start' }}
          activeOpacity={1}
          onPressOut={() => setShowDropdown(false)}
        >
          <S.Overlay />
          <S.OptionsContainer
            data={data}
            keyExtractor={(item: any) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => handleSelect(item.id)}
              >
                <S.OptionItem>{item.username}</S.OptionItem>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity onPress={() => setShowDropdown(false)}>
            <S.OptionItem>Cancel</S.OptionItem>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </S.Container>
  );
};

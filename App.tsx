import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native';

const View = styled.View`
  flex: 1;
  background-color: '#333';
  align-items: 'center';
  justify-content: 'center';
`;

export default function App() {
  return (
    <View>
      <StatusBar style='auto' />
    </View>
  );
}

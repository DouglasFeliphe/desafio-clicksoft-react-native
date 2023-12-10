import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native';
import PostsScreen from './src/screens/Posts';
import { Header } from './src/components/Header';

const View = styled.View`
  flex: 1;
  background-color: '#333';
  align-items: 'center';
  justify-content: 'center';
`;

export default function App() {
  return (
    <View>
      <Header title='Posts' />
      <PostsScreen />
      <StatusBar style='auto' />
    </View>
  );
}

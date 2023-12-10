import { StatusBar } from 'expo-status-bar';

import styled from 'styled-components/native';
import PostsScreen from './src/screens/Posts';
import NewPostsScreen from './src/screens/NewPost';

const View = styled.View`
  flex: 1;
  background-color: '#333';
  align-items: 'center';
  justify-content: 'center';
`;

export default function App() {
  return (
    <View>
      <NewPostsScreen />
      {/* <PostsScreen /> */}
      <StatusBar style='auto' />
    </View>
  );
}

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { PostItem } from '@components/PostItem';
import postData from '@mock/posts.json';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from '@shared-components/Container';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  type PostTypes = typeof postData;

  const [posts, setPosts] = useState<PostTypes[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setPosts(response.data);
        console.log('Posts fetched:', response.data);
        // Handle data, update state, etc.
      } catch (error) {
        console.error('Error fetching posts:', error);
        // Handle error, show error message, etc.
      }
    };

    fetchData();
  }, []);
  // function handleSearchPost() {
  //   //TODO: filter posts by value
  // }

  function handleUserProfilePress() {
    navigation.navigate('UserProfile');
  }

  function handleNavigateToNewPost() {
    navigation.navigate('NewPost');
  }

  return (
    <Container>
      <Header
        title="Posts"
        LeftButton={<View />}
        RightButton={
          <Button iconName="plus" onPress={handleNavigateToNewPost} />
        }
      />
      <FlatList
        data={posts}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <PostItem
            title={item.title}
            body={item.body}
            username={item.username}
            avatar={`https://i.pravatar.cc/100?img=${item.id}`}
            onUserInfoPress={handleUserProfilePress}
          />
        )}
      />
    </Container>
  );
};

export default PostsScreen;

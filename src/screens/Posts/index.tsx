import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { PostItem } from '@components/PostItem';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from '@shared-components/Container';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import useLoading from 'src/hooks/useLoading';

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [posts, setPosts] = useState<PostsTypes[]>([]);
  const { isLoading, startLoading, stopLoading } = useLoading();
  useEffect(() => {
    const fetchPosts = async () => {
      startLoading();
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts',
        );
        setPosts(response.data);
        stopLoading();
        console.log('Posts fetched:', response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
        stopLoading();
      }
    };

    fetchPosts();
  }, []);

  function handleUserProfilePress() {
    navigation.navigate('UserProfile');
  }

  function handleNavigateToNewPost() {
    navigation.navigate('NewPost');
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default PostsScreen;

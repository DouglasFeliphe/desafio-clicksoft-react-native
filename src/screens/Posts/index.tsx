import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { PostItem } from '@components/PostItem';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from '@shared/components/Container';
import useLoading from '@shared/hooks/useLoading';
import { UsersTypes } from '@shared/types/users.tupes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { isLoading, startLoading, stopLoading } = useLoading();

  const [posts, setPosts] = useState<PostsTypes[]>([]);
  const [users, setUsers] = useState<UsersTypes[]>([]);

  const fetchPosts = async () => {
    startLoading();
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      );
      setPosts(response.data);
      stopLoading();
    } catch (error) {
      console.error('Error fetching posts:', error);
      stopLoading();
    }
  };

  const fetchUsers = async () => {
    startLoading();
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(response.data);
      stopLoading();
      console.log('Posts fetched:', response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      stopLoading();
    }
  };

  function mergeUsernameWithPost(users: UsersTypes[], posts: PostsTypes[]) {
    const mergedData: any = [];

    posts.forEach((post) => {
      const user = users.find((user) => user.id === post.userId);
      if (user) {
        const mergedPost = { ...post, username: user.username };
        mergedData.push(mergedPost);
        console.warn(' mergedPost:', mergedPost);
      }
      //
    });

    return mergedData;
  }

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  const postsWithUser = mergeUsernameWithPost(users, posts);

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
            data={postsWithUser}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item }) => (
              <PostItem
                key={item.id}
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

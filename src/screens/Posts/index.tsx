import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { PostItem } from '@components/PostItem';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from '@shared/components/Container';
import { SCREENS } from '@shared/constants';
import { useAlert } from '@shared/hooks/useAlert';
import useLoading from '@shared/hooks/useLoading';
import { palette } from '@shared/theme/themes';
import { UsersTypes } from '@shared/types/users.tupes';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, View } from 'react-native';

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const { isLoading, startLoading, stopLoading } = useLoading();
  const successAlert = useAlert('Success', 'Post deleted successfully.');
  const errorAlert = useAlert(
    'Error',
    'Error while deleting post. Try again later.',
  );

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
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users',
      );
      setUsers(response.data);
      console.log('Posts fetched:', response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  function mergeUsernameWithPost(users: UsersTypes[], posts: PostsTypes[]) {
    const mergedData = [] as PostsTypes[];

    posts.forEach((post) => {
      const user = users.find((user) => user.id === post.userId);
      if (user) {
        const mergedPost = { ...post, username: user.username };
        mergedData.push(mergedPost);
        console.log(' mergedPost:', mergedPost);
      }
    });

    return mergedData;
  }

  useEffect(() => {
    fetchPosts();
    fetchUsers();
  }, []);

  const confirmDelete = (postId: number) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this post?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => handleDeletePost(postId),
          style: 'destructive',
        },
      ],
      { cancelable: true },
    );
  };
  async function handleDeletePost(postId: number) {
    startLoading();
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      setPosts(posts.filter((post) => post.id !== postId));
      console.log(`Post with ID ${postId} deleted.`);
      successAlert();

      stopLoading();
    } catch (error) {
      console.error('Error deleting post:', error);
      errorAlert('');
      stopLoading();
    }
  }

  function handleNavigateToCreateOrEditPost(postId?: number) {
    if (postId) {
      navigation.navigate('Home', {
        screen: SCREENS.CREATE_OR_EDIT_POST,
        params: { postId },
      });
    }

    navigation.navigate(SCREENS.CREATE_OR_EDIT_POST);
  }

  function handleUserProfilePress() {
    navigation.navigate('UserProfile');
  }

  const postsWithUser = mergeUsernameWithPost(users, posts);

  return (
    <Container>
      {isLoading && <Loader />}
      <Header
        title="Posts"
        LeftButton={<View />}
        RightButton={
          <Button
            iconName="plus"
            iconColor={palette.white}
            onPress={handleNavigateToCreateOrEditPost}
          />
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
            username={item.username ?? ''}
            avatar={`https://i.pravatar.cc/100?img=${item.id}`}
            onUserInfoPress={handleUserProfilePress}
            onEditPress={() => handleNavigateToCreateOrEditPost(item.id)}
            onDeletePress={() => confirmDelete(item.id)}
          />
        )}
      />
    </Container>
  );
};

export default PostsScreen;

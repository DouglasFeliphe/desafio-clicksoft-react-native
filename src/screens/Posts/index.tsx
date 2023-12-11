import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { PostItem } from '../../components/PostItem';
import { Header } from '../../components/Header';
import { Container } from '../../shared/components/Container';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// static data
const postData: PostsTypes[] = [
  {
    id: 1,
    userId: 1,
    username: 'Bret',
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit...',
  },
  {
    id: 2,
    userId: 2,
    username: 'Bret', // Added username here
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit...',
  },
  {
    id: 3,
    userId: 3,
    username: 'Bret', // Added username here
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit...',
  },
];

const PostsScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [posts, setPosts] = useState<PostsTypes[]>([]);

  useEffect(() => {
    setPosts(postData);
  }, []);

  function handleSearchPost() {
    //TODO: filter posts by value
  }

  return (
    <Container>
      <Header
        title='Posts'
        onPressLeftIcon={handleSearchPost}
        onPressRightIcon={() => navigation.navigate('NewPost')}
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
          />
        )}
      />
    </Container>
  );
};

export default PostsScreen;

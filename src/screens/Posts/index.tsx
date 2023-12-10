import React, { useEffect, useState } from 'react';
import { FlatList, Text, Image, View } from 'react-native';
import styled from 'styled-components/native';
import { PostItem } from '../../components/PostItem';
import { Container } from './styles';

// static data
const postData: PostsTypes[] = [
  {
    id: 1,
    userId: 1,
    username: 'Bret', // Added username here
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
  const [posts, setPosts] = useState<PostsTypes[]>([]);

  useEffect(() => {
    setPosts(postData);
  }, []);

  return (
    <Container>
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

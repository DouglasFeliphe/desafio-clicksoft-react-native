import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Container } from '../../shared/components/Container';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { useNavigation } from '@react-navigation/native';
import {
  UserAvatar,
  UserInfo,
  Username,
} from '../../components/PostItem/styles';

const NewPostsScreen: React.FC = () => {
  const [post, setPost] = useState('');
  //TODO: get the user id and name from route param
  const userId = 1; // temparary
  const username = 'Jane Doe'; // temparary

  function handleChangeText(text: string) {
    console.log('text :', text);
    setPost(text);
  }

  return (
    <Container>
      <Header
        title='Create a Post'
        LeftButton={<Button iconName='chevron-left' noBorder />}
        RightButton={<Button buttonText='Create' noBorder />}
      />
      <TextArea
        placeholder='Whats new?...'
        value={post}
        onChangeText={handleChangeText}
      />
    </Container>
  );
};

export default NewPostsScreen;

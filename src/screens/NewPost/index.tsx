import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/Header';
import { Container } from '../../shared/components/Container';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';
import { useNavigation } from '@react-navigation/native';

const NewPostsScreen: React.FC = () => {
  const [post, setPost] = useState('');

  function handleChangeText(text: string) {
    console.log('text :', text);
    setPost(text);
  }

  return (
    <Container>
      <Header
        title='Create a Post'
        LeftButton={<Button iconName='chevron-left' noBorder />}
        RightButton={
          post ? <Button buttonText='Create' noBorder /> : <View></View>
        }
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

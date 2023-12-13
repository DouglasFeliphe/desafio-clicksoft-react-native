import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@shared-components/Container';
import axios from 'axios';
import React, { useState } from 'react';
import useLoading from 'src/hooks/useLoading';

import * as S from './styles';

interface NewPostsScreenProps {}
interface PostData {
  title: string;
  body: string;
  userId: number;
}
const NewPostsScreen: React.FC<NewPostsScreenProps> = () => {
  const navigation = useNavigation();
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 1, // Replace with the desired userId
  });

  const handleSubmit = async () => {
    startLoading();
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        postData,
      );
      console.log('Post created:', response.data);
      stopLoading();
      // Handle successful post creation, update UI, etc.
    } catch (error) {
      console.error('Error creating post:', error);
      stopLoading();
      // Handle error, show error message, etc.
    }
  };

  const handleChange = (name: keyof PostData, value: string) => {
    console.log('value :', value);
    console.log('name :', name);
    setPostData({ ...postData, [name]: value });
  };

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        <Header
          title="New Post"
          LeftButton={
            <Button
              iconName="chevron-left"
              noBorder
              onPress={navigation.goBack}
            />
          }
          RightButton={
            <Button buttonText="Create" noBorder onPress={handleSubmit} />
          }
        />

        <S.InputContainer>
          {/* <S.InputLabel>User</S.InputLabel> */}
          {/* <S.InputField
          placeholder="User"
          value={postData.}
          onChangeText={(text) => handleChange('userId', text)}
        /> */}
          {/* <S.InputLabel>Title</S.InputLabel> */}
          <S.InputField
            placeholder="Title"
            value={postData.title}
            onChangeText={(text) => handleChange('title', text)}
          />
          {/* <S.InputLabel>Body</S.InputLabel> */}
          <S.InputTextArea
            multiline
            numberOfLines={10}
            placeholder="Body"
            value={postData.body}
            onChangeText={(text) => handleChange('body', text)}
          />
        </S.InputContainer>
      </Container>
    </>
  );
};

export default NewPostsScreen;

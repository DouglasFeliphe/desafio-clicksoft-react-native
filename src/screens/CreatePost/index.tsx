import { Button } from '@components/Button';
import { CustomSelect } from '@components/CustomSelect';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container } from '@shared/components/Container';
import { useAlert } from '@shared/hooks/useAlert';
import useLoading from '@shared/hooks/useLoading';
import { palette } from '@shared/theme/themes';
import { UsersTypes } from '@shared/types/users.tupes';
import React, { useEffect, useState } from 'react';
import { api } from 'src/services/api';

import * as S from './styles';

interface PostData {
  title: string;
  body: string;
  userId: number;
}
const CreatePostScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const successAlert = useAlert(
    'Success',
    'Post created successfully.',
    'POSTS',
  );
  const errorAlert = useAlert('Error', 'Some fields are not filled.');
  const { isLoading, startLoading, stopLoading } = useLoading();

  const [postData, setPostData] = useState({
    title: '',
    body: '',
    userId: 0, // Replace with the desired userId
  });

  const [users, setUsers] = useState<UsersTypes[]>([]);

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmit = async () => {
    // format data
    const formattedPostData = { ...postData, userId: selectedValue };

    if (!formattedPostData.title || !formattedPostData.body) {
      errorAlert();
      return;
    }

    startLoading();

    try {
      const response = await api.post('/posts', { formattedPostData });

      console.log('Post created:', response.data);
      stopLoading();

      successAlert();
    } catch (error) {
      console.error('Error creating post:', error);
      stopLoading();
      // Handle error, show error message, etc.
    }
  };

  const handleChange = (name: keyof PostData, value: string) => {
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
              iconColor={palette.white}
              noBorder
              onPress={navigation.goBack}
            />
          }
          RightButton={<Button buttonText="Create" onPress={handleSubmit} />}
        />

        <S.InputContainer>
          <CustomSelect
            data={users}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            customDefaultText="Choose a user"
          />
          <S.InputField
            placeholder="Title"
            placeholderTextColor={palette.title}
            value={postData.title}
            onChangeText={(text) => handleChange('title', text)}
          />
          <S.InputTextArea
            multiline
            numberOfLines={10}
            placeholder="Body"
            placeholderTextColor={palette.title}
            value={postData.body}
            onChangeText={(text) => handleChange('body', text)}
          />
        </S.InputContainer>
      </Container>
    </>
  );
};

export default CreatePostScreen;

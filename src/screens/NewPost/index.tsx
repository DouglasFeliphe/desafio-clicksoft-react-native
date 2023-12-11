import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { useNavigation } from '@react-navigation/native';
import { Container } from '@shared-components/Container';
import React from 'react';

import * as S from './styles';

interface NewPostsScreenProps {
  // navigation: NavigationPreloadState;
}

const NewPostsScreen: React.FC<NewPostsScreenProps> = () => {
  // const [post, setPost] = useState('');
  const navigation = useNavigation();

  //TODO: get the user id and name from route param
  // const userId = 1; // temparary
  // const username = 'Jane Doe'; // temparary

  // function handleChangeText(text: string) {
  //   console.log('text :', text);
  //   setPost(text);
  // }

  return (
    <Container>
      <Header
        title="Create a Post"
        LeftButton={
          <Button
            iconName="chevron-left"
            noBorder
            onPress={navigation.goBack}
          />
        }
        RightButton={<Button buttonText="Create" noBorder />}
      />
      <S.InputContainer>
        {/* <S.InputLabel>User</S.InputLabel> */}
        <S.InputField
          placeholder="User"
          // value={text}
          // onChangeText={(inputText) => setText(inputText)}
        />
        {/* <S.InputLabel>Title</S.InputLabel> */}
        <S.InputField
          placeholder="Title"
          // value={text}
          // onChangeText={(inputText) => setText(inputText)}
        />
        {/* <S.InputLabel>Body</S.InputLabel> */}
        <S.InputTextArea multiline numberOfLines={10} placeholder="Body" />
      </S.InputContainer>
    </Container>
  );
};

export default NewPostsScreen;

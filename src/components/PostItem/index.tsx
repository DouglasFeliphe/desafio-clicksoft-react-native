import React from 'react';
import * as S from './styles';

export const PostItem: React.FC<{
  title: string;
  body: string;
  username: string;
  avatar: string;
}> = ({ title, body, username, avatar }) => {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <S.Avatar source={{ uri: avatar }} />
        <S.Username>{username}</S.Username>
      </S.PostHeader>
      <S.PostImage
        source={{ uri: 'https://via.placeholder.com/600x300.png' }}
      />
      <S.PostContent>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
      </S.PostContent>
    </S.PostContainer>
  );
};

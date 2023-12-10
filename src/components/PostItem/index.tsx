import React from 'react';
import * as S from './styles';
import { Button } from '../Button';

export const PostItem: React.FC<{
  title: string;
  body: string;
  username: string;
  avatar: string;
}> = ({ title, body, username, avatar }) => {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <S.UserInfo>
          <S.UserAvatar source={{ uri: avatar }} />
          <S.Username>{username}</S.Username>
        </S.UserInfo>
        <S.PostOptions>
          <Button iconName='ellipsis-v' noBorder />
        </S.PostOptions>
      </S.PostHeader>
      <S.PostContent>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
      </S.PostContent>
    </S.PostContainer>
  );
};

import React from 'react';

import * as S from './styles';
import { Button } from '../Button';

interface PostItemProps {
  title: string;
  body: string;
  username: string;
  avatar: string;
  onUserInfoPress?: () => void;
}

export const PostItem: React.FC<PostItemProps> = ({
  title,
  body,
  username,
  avatar,
  onUserInfoPress,
}) => {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <S.UserInfo onPress={onUserInfoPress}>
          <S.UserAvatar source={{ uri: avatar }} />
          <S.Username>{username}</S.Username>
        </S.UserInfo>
        <S.PostOptions>
          <Button iconName="ellipsis-v" noBorder />
        </S.PostOptions>
      </S.PostHeader>
      <S.PostContent>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
      </S.PostContent>
    </S.PostContainer>
  );
};

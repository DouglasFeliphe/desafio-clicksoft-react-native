import { palette } from '@shared/theme/themes';
import React from 'react';

import * as S from './styles';
import { Button } from '../Button';

interface PostItemProps {
  title: string;
  body: string;
  username: string;
  avatar: string;
  onUserInfoPress: () => void;
  onEditPress: () => void;
  onDeletePress: () => void;
}

export const PostItem: React.FC<PostItemProps> = ({
  title,
  body,
  username,
  avatar,
  onUserInfoPress,
  onEditPress,
  onDeletePress,
}) => {
  return (
    <S.PostContainer>
      <S.PostHeader>
        <S.UserInfo onPress={onUserInfoPress}>
          <S.UserAvatar source={{ uri: avatar }} />
          <S.Username>{username}</S.Username>
        </S.UserInfo>
        <S.PostOptions>
          <Button iconName="edit" noBorder onPress={onEditPress} />
          <Button
            iconName="trash"
            noBorder
            iconColor={palette.danger}
            onPress={onDeletePress}
          />
        </S.PostOptions>
      </S.PostHeader>
      <S.PostContent>
        <S.Title>{title}</S.Title>
        <S.Body>{body}</S.Body>
      </S.PostContent>
    </S.PostContainer>
  );
};

import styled from 'styled-components/native';

import { Color } from '../../GlobalStyles';

export const PostContainer = styled.View`
  margin: 5px 22px 5px 22px;
  border-bottom-color: #ccc;
  border-bottom-width: 1px;
  border-radius: 15px;
  background-color: #fff;

  /* elevation: 0.5; */
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
export const UserInfo = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const PostOptions = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Username = styled.Text`
  font-weight: bold;
  color: ${Color.colorBlueviolet};
`;
export const UserEmail = styled.Text`
  /* font-weight: bold; */
  color: ${Color.colorBlueviolet};
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const PostContent = styled.View`
  margin: 2px 25px 25px 25px;
`;

export const Title = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Body = styled.Text`
  color: #333;
`;

export const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

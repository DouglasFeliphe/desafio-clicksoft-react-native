import styled from 'styled-components/native';
import { Color } from '../../GlobalStyles';

export const PostContainer = styled.View`
  margin-bottom: 20px;
`;

export const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const Username = styled.Text`
  font-weight: bold;
  color: ${Color.colorBlueviolet};
`;

export const PostImage = styled.Image`
  width: 100%;
  height: 300px;
`;

export const PostContent = styled.View`
  padding: 10px;
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

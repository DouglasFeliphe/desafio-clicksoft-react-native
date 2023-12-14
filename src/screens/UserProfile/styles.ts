import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
`;

export const Username = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const FullName = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Email = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

export const Bio = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

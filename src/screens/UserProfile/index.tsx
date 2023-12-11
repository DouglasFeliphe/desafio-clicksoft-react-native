import { Button } from '@components/Button';
import { Header } from '@components/Header';
import React from 'react';
import styled from 'styled-components/native';

// Sample user data
const userData = {
  username: 'john_doe',
  fullName: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://i.pravatar.cc/100?img=1',

  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet justo ut magna tincidunt, vel tincidunt turpis gravida.',
};

const ProfileContainer = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
`;

const Username = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FullName = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Email = styled.Text`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const Bio = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

export const UserProfileScreen: React.FC = () => {
  return (
    <>
      <Header title="User Profile" />
      <ProfileContainer>
        <Avatar source={{ uri: userData.avatar }} />
        <Username>@{userData.username}</Username>
        <FullName>{userData.fullName}</FullName>
        <Email>{userData.email}</Email>
        <Bio>{userData.bio}</Bio>
        <Button buttonText="Submit" />
      </ProfileContainer>
    </>
  );
};

import { Header } from '@components/Header';
import { Loader } from '@components/Loader';
import { useRoute } from '@react-navigation/native';
import useLoading from '@shared/hooks/useLoading';
import { UsersTypes } from '@shared/types/users.tupes';
import React, { useEffect, useState } from 'react';
import { api } from 'src/services/api';

import * as S from './styles';

export const UserProfileScreen: React.FC = () => {
  const route = useRoute();
  const params = route.params;
  const userId = params?.userId;
  console.log('userId :', userId);

  const { isLoading, startLoading, stopLoading } = useLoading();

  const [userData, setUserData] = useState({} as UsersTypes);

  useEffect(() => {
    if (userId) {
      setUserData({} as UsersTypes);

      fetchUserById();
    }
  }, [userId]);

  const fetchUserById = async () => {
    startLoading();
    try {
      const response = await api.get(`/users/${userId}`);

      console.log(' response.data:', response.data);
      setUserData(response.data);
      console.log('user by id fetched:', response.data);

      stopLoading();
    } catch (error) {
      console.error('Error fetching user by id:', error);

      stopLoading();
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <Header title="User Profile" />
      <S.ProfileContainer>
        <S.Avatar source={{ uri: 'https://i.pravatar.cc/100?img=' + userId }} />
        <S.Username>@{userData.username ?? ''}</S.Username>
        <S.FullName>{userData.name ?? ''}</S.FullName>
        <S.Email>{userData.email ?? ''}</S.Email>
        <S.Bio>{userData.website ?? ''}</S.Bio>
      </S.ProfileContainer>
    </>
  );
};

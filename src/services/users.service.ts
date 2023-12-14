import { UsersTypes } from '@shared/types/users.tupes';

import { api } from './api';

export const fetchUsers = async () => {
  try {
    const response = await api.get('/users');
    console.log('users fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

export const fetchOneUser = async (
  userId: string | number,
): Promise<UsersTypes | undefined> => {
  try {
    const response = await api.get('/users/' + userId);
    console.log('user fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return {} as UsersTypes;
  }
};

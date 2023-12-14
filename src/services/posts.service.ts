import { api } from './api';

export const fetchPosts = async () => {
  try {
    const response = await api.get('/posts');
    console.log('posts fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

export const fetchDeletePosts = async (postId: number) => {
  try {
    await api.delete(`/posts/${postId}`);
    return true;
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
};

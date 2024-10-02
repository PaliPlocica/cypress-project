export const BASE_URL = 'https://jsonplaceholder.typicode.com';

const postId = 1;

export const api = {
  post: `${BASE_URL}/posts`,
  put: `${BASE_URL}/posts/${postId}`,
};

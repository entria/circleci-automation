import { getHeaders } from './circleciApi';

export const api = async (url: string, options?: object = {}) => {
  const headers = {
    ...getHeaders(),
    ...(options.headers || {}),
  };

  const response = await fetch(url, {
    method: 'GET',
    ...options,
    headers,
  });
  return await response.json();
};

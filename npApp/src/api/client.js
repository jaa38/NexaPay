import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://your-api-url.com',
  timeout: 5000,
});
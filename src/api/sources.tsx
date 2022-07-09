import { http } from './setup';

export const fetchSources = async () => {
  return http.get('/sources');
};

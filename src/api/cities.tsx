import { http } from './setup';

export const fetchCities = async () => {
  return http.get('/cities');
};

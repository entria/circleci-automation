import { config } from './config';

export const baseUrl = 'https://circleci.com/api/v2';

export const getHeaders = () => ({
    Accept: 'application/json',
    'Circle-Token': config.CIRCLECI_API_TOKEN,
  });

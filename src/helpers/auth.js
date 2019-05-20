import storage from 'helpers/storage';

export const setAuthToken = token => storage.setItem('access-token', token);

export const getAuthToken = () => storage.getItem('access-token');

const getApiUrl = () => {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  if (import.meta.env.PROD) {
    return 'https://chats-y47a.onrender.com';
  }
  
  return '';
};

export const API_URL = getApiUrl();


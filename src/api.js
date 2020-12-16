import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const ROOT_URL = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/';

const makeAxiosInstance = () => {
  const instance = axios.create({ baseURL: ROOT_URL });

  instance.interceptors.request.use((config) => ({
    ...config,
    params: {
      header: {
        token: API_KEY
      },
      ...config.params
    }
  }));

  return instance;
};

export const api = makeAxiosInstance();

export const fetchMessages = async () => {
  const response = await api
    .get(`?token=${API_KEY}`)
    .then((resp) => resp.data)
    .catch(() => `Error`);

  return response;
};

export const fetchNMessagesSinceTimestamp = async (
  numberOfMessages,
  timestamp
) => {
  const response = await api
    .get(`?since=${timestamp}&limit=${numberOfMessages}&token=${API_KEY}`)
    .then((resp) => resp.data)
    .catch(() => `Error`);

  return response;
};

export const sendMessage = (messageObj) => {
  axios.post(`${ROOT_URL}?token=${API_KEY}`, messageObj);
};

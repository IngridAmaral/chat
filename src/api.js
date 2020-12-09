import axios from 'axios';

// curl -X POST
// -H "Content-Type: application/json"
//  -H "token: E9vmJ8XvUYlu"
//  -d "{\"message\":\"I'm great. Thanks\",\"author\":\"Jessica\"}"
//  https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0

const ROOT_URL = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';
const TOKEN = 'E9vmJ8XvUYlu';

export const fetchMessages = async () => {
  const response = await axios.get(
    `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${TOKEN}`
  );

  return response.data;
};

export const sendMessage = (messageObj) => {
  axios({
    method: 'post',
    url: ROOT_URL,
    token: TOKEN,
    data: messageObj
  });
};

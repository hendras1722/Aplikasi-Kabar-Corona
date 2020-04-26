import axios from 'axios';

export const getLocal = () => {
  return {
    type: 'GET_LOCAL',
    payload: axios({
      method: 'GET',
      url: `https://api.kawalcorona.com/indonesia/provinsi/`,
    }),
  };
};
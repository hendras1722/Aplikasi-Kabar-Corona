import axios from 'axios';

export const getGlobal = () => {
  return {
    type: 'GET_GLOBAL',
    payload: axios({
      method: 'GET',
      url: `https://api.kawalcorona.com/`,
    }),
  };
};
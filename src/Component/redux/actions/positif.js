import axios from 'axios';

export const getPositif = () => {
  return {
    type: 'GET_POSITIF',
    payload: axios({
      method: 'GET',
      url: `https://api.kawalcorona.com/positif`,
    }),
  };
};
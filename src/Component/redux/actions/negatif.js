import axios from 'axios';

export const getNegatif = () => {
    return {
        type: 'GET_NEGATIF',
        payload: axios({
            method: 'GET',
            url: `https://api.kawalcorona.com/sembuh`,
        }),
    };
};
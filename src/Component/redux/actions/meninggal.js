import axios from 'axios';

export const getDie = () => {
    return {
        type: 'GET_DIE',
        payload: axios({
            method: 'GET',
            url: `https://api.kawalcorona.com/meninggal`,
        }),
    };
};
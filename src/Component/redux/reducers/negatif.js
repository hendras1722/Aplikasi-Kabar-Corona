const initialState = {
    negatif: []
};

const negatif = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_NEGATIF_PENDING':
            return {
                ...state,
            };
        case 'GET_NEGATIF_REJECTED':
            return {
                ...state,
            };
        case 'GET_NEGATIF_FULFILLED':
            return {
                ...state,
                negatif: action.payload.data,
            };

        default:
            return state;
    }
};

export default negatif;

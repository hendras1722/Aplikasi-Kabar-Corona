const initialState = {
    die: []
};

const die = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_DIE_PENDING':
            return {
                ...state,
            };
        case 'GET_DIE_REJECTED':
            return {
                ...state,
            };
        case 'GET_DIE_FULFILLED':
            return {
                ...state,
                die: action.payload.data,
            };

        default:
            return state;
    }
};

export default die;

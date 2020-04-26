const initialState = {
  positif: []
};

const positif = (state = initialState, action) => {
  switch (action.type) {

    case 'GET_POSITIF_PENDING':
      return {
        ...state,
      };
    case 'GET_POSITIF_REJECTED':
      return {
        ...state,
      };
    case 'GET_POSITIF_FULFILLED':
      return {
        ...state,
        positif: action.payload.data,
      };

    default:
      return state;
  }
};

export default positif;

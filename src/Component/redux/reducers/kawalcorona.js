const initialState = {
  corona: [],
  indonesia: []
};

const corona = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GLOBAL_PENDING':
      return {
        ...state,
      };
    case 'GET_GLOBAL_REJECTED':
      return {
        ...state,
      };
    case 'GET_GLOBAL_FULFILLED':
      return {
        ...state,
        corona: action.payload.data,
        // indonesia: action.payload.data[35]
      };

    default:
      return state;
  }
};

export default corona;

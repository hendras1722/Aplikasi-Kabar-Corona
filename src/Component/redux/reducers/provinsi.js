const initialState = {
  local: [],
};

const local = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOCAL_PENDING':
      return {
        ...state,
      };
    case 'GET_LOCAL_REJECTED':
      return {
        ...state,
      };
    case 'GET_LOCAL_FULFILLED':
      return {
        ...state,
        local: action.payload.data,
      };

    default:
      return state;
  }
};

export default local;
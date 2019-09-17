const initialState = {
  data: [],
  loading: false
};

const common = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CEP":
      return action.payload.data;
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default common;

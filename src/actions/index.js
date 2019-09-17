import Api from "../Api";

export const getViaCep = cep => {
  try {
    return async dispatch => {
      dispatch(setLoading(true));
      const res = await Api.get(`https://viacep.com.br/ws/${cep}/json`);
      dispatch(setLoading(false));

      return res.data;
    };
  } catch (err) {
    ispatch(setLoading(false));
    console.log(err);
  }
};

export const setLoading = load => {
  return dispatch => {
    dispatch({ type: "LOADING", payload: load });
  };
};

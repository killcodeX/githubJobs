export default (state, action) => {
  switch (action.type) {
    case "GET_PARAMAS":
      return { ...state, loading:true, params: action.payload };

    case "GET_PAGE":
      return { ...state, loading:true, page: action.payload };

    case "GET_DATA":
      return { ...state, loading: false, jobs: action.payload };

    case "GET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

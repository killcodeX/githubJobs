export default (state, action) => {
  switch (action.type) {
    case "GET_PARAMAS":
      return { params: action.payload };

    case "GET_PAGE":
      return { page: action.payload };

    case "GET_DATA":
      return { ...state, loading: false, jobs: action.payload };

    default:
      return state;
  }
};

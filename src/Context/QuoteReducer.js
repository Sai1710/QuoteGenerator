const quoteReducer = (state, action) => {
  switch (action.type) {
    case "SET_QUOTE":
      return {
        ...state,
        quote: action.payload,
      };
    case "SET_TAGS":
      return {
        ...state,
        tags: action.payload,
      };
    case "SET_TAG":
      return {
        ...state,
        tag: action.payload,
      };
    default:
      return state;
  }
};

export default quoteReducer;

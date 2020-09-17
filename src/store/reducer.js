const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_QUESTIONS':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_QUESTIONS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        questions: action.payload
      };

    case 'FETCH_QUESTIONS_ERROR':
      return {
        ...state,
        isLoading: false,
        questions: [],
        error: action.error.message
      };

    default:
      return state;
  }
};

export default reducer;

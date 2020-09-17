const actions = {
  FETCH_QUESTIONS: ({ dispatch }) => async () => {
    try {
      const payload = await fetch('/questions.json')
        .then((response) => {
            if (response.status !== 200) {
              throw new Error(`Looks like there was a problem. Status Code: ${response.status}`);
            }

            return response.json();
          }
        );

      dispatch({
        type: 'FETCH_QUESTIONS_SUCCESS',
        payload
      });
    } catch (error) {
      dispatch({
        type: 'FETCH_QUESTIONS_ERROR',
        error: error
      });
    }
  }
};

export default actions;

import sleep from '../helpers/sleep';

export const fetchQuestions = () => async (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_QUESTIONS'
    });

    const questions = await fetch('/questions.json')
      .then((response) => {
          if (response.status !== 200) {
            throw new Error(`Looks like there was a problem. Status Code: ${response.status}`);
          }

          return response.json();
        }
      );

    await sleep(3000); // fake delay to see animations

    dispatch({
      type: 'FETCH_QUESTIONS_SUCCESS',
      questions
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_QUESTIONS_ERROR',
      error
    });
  }
};

export const submitAnswer = (questionIndex, answerIndex, isAnswerCorrect) => async (dispatch) => {
  try {
    dispatch({
      type: 'SUBMIT_ANSWER',
      questionIndex,
      answerIndex,
      isAnswerCorrect
    });

    await(sleep(3000)); // wait 3 seconds before moving to next question

    dispatch({
      type: 'SUBMIT_ANSWER_SUCCESS',
      questionIndex
    });
  } catch (error) {
    console.error(error);

    dispatch({
      type: 'SUBMIT_ANSWER_ERROR',
      error
    });
  }
};

export const restartQuiz = () => ({
  type: 'RESTART_QUIZ'
});

export const setNotification = notification => ({
  type: 'SET_NOTIFICATION',
  notification
});

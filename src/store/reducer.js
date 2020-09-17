import initialState from './initial-state';

const reducer = (state = initialState, action) => {
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
        questions: action.questions
      };

    case 'FETCH_QUESTIONS_ERROR':
      return {
        ...state,
        isLoading: false,
        questions: [],
        error: action.error.message
      };

    case 'SUBMIT_ANSWER':
      return {
        ...state,
        questions: state.questions.map((question, questionIndex) => (action.questionIndex === questionIndex ? ({
          ...question,
          isSubmitted: true,
          answers: question.answers.map((answer, answerIndex) => ({
            ...answer,
            isSelected: action.answerIndex === answerIndex
          }))
        }) : question)),
        notification: action.isAnswerCorrect === true ? {
          text: 'Good job!',
          type: 'success'
        } : {
          text: 'Sorry, that\'s not quite right!',
          type: 'error'
        }
      };

    case 'SUBMIT_ANSWER_SUCCESS':
      const isCompleted = action.questionIndex + 1 >= state.questions.length;

      return {
        ...state,
        isCompleted,
        activeQuestionIndex: isCompleted === false ? action.questionIndex + 1 : action.questionIndex,
        notification: null
      };

    case 'RESTART_QUIZ':
      return initialState;

    case 'SET_NOTIFICATION':
      return {
        ...state,
        notification: action.notification
      };

    default:
      return state;
  }
};

export default reducer;

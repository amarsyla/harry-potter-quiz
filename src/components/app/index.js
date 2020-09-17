import React, { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import reducer from '../../store/reducer';
import actions from '../../store/actions';
import initialState from '../../store/initial-state';
import Header from '../header';
import Footer from '../footer';
import Quiz from '../quiz';
import './app.css';

const App = () => {
  const [state, dispatch] = useReducerAsync(reducer, initialState, actions);

  useEffect(() => {
    dispatch({ type: 'FETCH_QUESTIONS' });
  }, []); // eslint-disable-line

  console.log(state);

  return (
    <div className="app">
      <div className="app__inner">
        <Header />

        <Quiz
          isLoading={state.isLoading}
          questions={state.questions}
          activeQuestionIndex={state.activeQuestionIndex}
        />

        <Footer
          questions={state.questions}
          activeQuestionIndex={state.activeQuestionIndex}
          notification={state.notification}
        />
      </div>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useReducerAsync } from 'use-reducer-async';
import reducer from '../../store/reducer';
import actions from '../../store/actions';
import initialState from '../../store/initial-state';
import Header from '../header';
import Quiz from '../quiz';

const App = () => {
  const [state, dispatch] = useReducerAsync(reducer, initialState, actions);

  useEffect(() => {
    dispatch({ type: 'FETCH_QUESTIONS' });
  }, []); // eslint-disable-line

  console.log(state);

  return (
    <div className="app">
      <Header />

      <br /><br />

      <Quiz questions={state.questions} />
    </div>
  );
}

export default App;

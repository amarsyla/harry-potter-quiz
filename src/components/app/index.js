import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchQuestions } from '../../store/actions';
import Header from '../header';
import Quiz from '../quiz';
import Footer from '../footer';
import './app.css';

const App = ({
  questions,
  fetchQuestions
}) => {
  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestions();
    }
  }, [questions.length, fetchQuestions]);

  return (
    <div className="app">
      <div className="app__inner">
        <Header />

        <Quiz />

        <Footer />
      </div>
    </div>
  );
}

const mapState = state => ({
  questions: state.questions
});

const mapDispatch = dispatch => ({
  fetchQuestions: () => dispatch(fetchQuestions())
});

export default connect(mapState, mapDispatch)(App);

import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>QuizApp!</h1>
          <p className='lead'>
            QuizApp is a place where you can take part in and even create your
            own quizzes!
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Join!
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

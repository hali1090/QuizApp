import React from 'react';

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
            <a href='register.html' className='btn btn-primary'>
              Join!
            </a>
            <a href='login.html' className='btn btn-light'>
              Login!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

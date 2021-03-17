import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { sendFeedback } from '../../actions/feedback';
import { sendVote } from '../../actions/poll.js';

// const feedback = ({ isAuthenticated }) => {
//   if (isAuthenticated) {
//     return  <Fragment>
//     <Link to='/dashboard' className='btn btn-primary my-1'>
//       Go back to my profile
//     </Link>
//     <Link to='/results' className='btn btn-primary my-1'>
//       Click to see the results of the survey
//     </Link>
//     </Fragment>
    
//   }};

const feedback = (props) => {
  return <fragment>
    {/* <Link to='/dashboard' className='btn btn-primary my-1'>
       Go back to my profile
     </Link>
     <Link to='/results' className='btn btn-primary my-1'>
       Click to see the results of the survey
     </Link> */}
     <h1 id='question' ></h1>
     <button id='choice1' className='btn btn-primary my-1'></button>
     <p>Current Vote tally:</p>
     <p id='votes1'></p>
     <button id='choice2' className='btn btn-primary my-1'></button>
     <p>Current Vote tally:</p>
     <p id='votes2'></p>
  </fragment>
};

  window.onload = sendApiRequest

  async function sendApiRequest(){
    let response = await fetch('https://polls.apiblueprint.org/questions/12');
    console.log(response)
    let data = await response.json()
    console.log(data)
    UseApiData(data)
  }

  function UseApiData(data){
    document.querySelector('#question').innerHTML = data.question
    document.querySelector('#choice1').innerHTML = data.choices[0].choice
    document.querySelector('#votes1').innerHTML = data.choices[0].votes
    document.querySelector('#choice2').innerHTML = data.choices[1].choice
    document.querySelector('#votes2').innerHTML = data.choices[1].votes
  }

  


feedback.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(feedback);
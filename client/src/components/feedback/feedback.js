import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
import { sendFeedback } from '../../actions/feedback';

const feedback = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return  <Fragment>
    <Link to='/dashboard' className='btn btn-primary my-1'>
      Go back to my profile
    </Link>
    <Link to='/results' className='btn btn-primary my-1'>
      Click to see the results of the survey
    </Link>
    </Fragment>
  }};

feedback.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(feedback);
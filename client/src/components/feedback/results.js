// This file is unused but i'm scared of deleting it 
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
//import Spinner from '../layout/Spinner';
import { connect } from 'react-redux';
//import { getResults } from '../../actions/feedback';


const results = ({ isAuthenticated }) => {
    if (isAuthenticated) {
      return  <Fragment>
      <h1>Placeholder</h1>
      </Fragment>
    }};

results.propTypes = {
    isAuthenticated: PropTypes.bool,
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps)(results);
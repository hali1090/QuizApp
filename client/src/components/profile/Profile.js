import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getUserIdProfile, getAllProfiles } from '../../actions/profile';

const Profile = ({
  getUserIdProfile,
  profile: { profile, loading },
  auth,
  match,
}) => {
  useEffect(() => {
    getUserIdProfile(match.params.id);
  }, [getUserIdProfile]);
  return (
    <Fragment>
      {profile === null || loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to='/profile>' className='btn btn-light'>
            {' '}
            Back To All Profile
          </Link>
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to='/adit-profile' className='btn btn-dark'>
                Edit My Profile
              </Link>
            )}
        </Fragment>
      )}
    </Fragment>
  );
};

Profile.propTypes = {
  getUserIdProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getUserIdProfile })(Profile);

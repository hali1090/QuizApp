import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import { Link, withRouter } from 'react-router-dom';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    location: '',
    bio: '',
    facebook: '',
    instagram: '',
    twitter: '',
  });

  const [displaySocial, toggleSocial] = useState(false);

  const { location, bio, facebook, instagram, twitter } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Create Your Profile</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Let's create your profile! Please
        remember that anybody will be able to see your profile.
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <p className='lead'>Where are you from?</p>
          <input
            type='text'
            placeholder='E.g Glasgow, Scotland'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='form-group'>
          <p className='lead'>Tell us a bit about yourself!*</p>
          <textarea
            placeholder='Introduce yourself!'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocial(!displaySocial)}
            type='button'
            className='btn btn-light'
          >
            Link your social networks!
          </button>
          <span>Optional</span>
        </div>

        {displaySocial && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));

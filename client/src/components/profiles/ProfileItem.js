import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    location,
    bio,
  },
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>

        <p className='my-1'>
          <i class='fas fa-map-pin'></i>
          {location && <span>{location}</span>}
        </p>
        <p className='my-1'>{bio}</p>
        <Link to={`/profile/${_id}`} className='btn btn-dark'>
          View user and their quizzes!
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;

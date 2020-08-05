import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  DELETE_ACCOUNT,
} from './types';

// Get the current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile/myprofile');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};
// Create/Update profile
export const createProfile = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });

    dispatch(
      setAlert(
        edit
          ? 'Succesfully updated your profile!'
          : 'Succesfully created your profile!',
        'success'
      )
    );

    if (!edit) {
      history.pushState('/dashboard');
    }
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.status },
    });
  }
};

// Delete account
export const deleteAccount = () => async (dispatch) => {
  if (
    window.confirm(
      'Are you certain that you would like to delete your account? This will also delete your profile and any quizzes you have made and CANNOT be undone.'
    )
  ) {
    try {
      const res = await axios.delete('/api/profile');
      dispatch({
        type: CLEAR_PROFILE,
      });
      dispatch({
        type: DELETE_ACCOUNT,
      });
      dispatch(setAlert('Your account has sucessfully been deleted'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};

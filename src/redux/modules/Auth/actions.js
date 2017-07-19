import 'isomorphic-fetch';
import { reset, SubmissionError } from 'redux-form';

/*
  Action Creators
*/

export const authenticationRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST'
  }
}

export const setCurrentUser = user => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user
  }
}

/*
  Async Actions (connect to DB / plug into Rails API)
*/

export const signup = (userDetails, router) => {
  return dispatch => {
    dispatch(authenticationRequest())
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // Because "params.require" (back-end Rails API) is wrapped in a 'user' namespace:
      body: JSON.stringify({ user: userDetails })
    })
    .then(response => response.json())
    .then(body => {
      const slug = body.user.email.split("@")[0];
      localStorage.setItem('e.shop.token', body.token);
      dispatch(setCurrentUser(body.user));
      dispatch(reset('signup'));
      router.history.replace(`/users/${slug}/profile`);
    })
    .catch(err => {
      throw new SubmissionError(err)
    })
  }
}

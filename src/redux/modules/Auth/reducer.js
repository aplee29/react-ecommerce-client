const initialState = {
  isAuthenticated: false,
  isAuthenticating: true,
  currentUser: {}
}

// action = { type: 'AUTHENTICATION_REQUEST' }
// action = { type: 'AUTHENTICATION_SUCCESS', user: { id: 1, email: 'test@user.com' } }

export default (state = initialState, action) => {
  switch(action.type) {

    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true
      }

    case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user
      }

    default:
      return state;
  }
}

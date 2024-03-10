const SET_USER_NAME = 'setUserName'

const initialState = {
  userName: '',
  role: '',
}

// action creator
export const setUserName = (payload) => ({
  type: SET_USER_NAME,
  payload
})


export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      }
    default:
      return state
  }
}

// Middleware
// Thunk
// redux-thunk

const createThunk = ({ dispatch, getState }) => next => action => {
  if(typeof action === 'function') {
    return action(dispatch, getState)
  }

  return next(action)
}


const userInfoThunk = (dispatch, getState) => {
  const userProfile = getUserProfile()

  dispatch(userProfile)
}













import constants from '../constants'

const initialState = {
  currentUser: null,
  users: [],
  shops: [],
  products: [],
  videos: []
}

export const Reducer = (state=initialState, action) => {
  let newState = {}
  if (state == undefined){
    return newState
  }

  switch (action.type) {
    case constants.GET_USERS:
      newState = Object.assign({}, state, {
        users: []
      })
      break
    default:
      break
  }

  return newState
}

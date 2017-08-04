export const Reducer = (state, action) => {
  if (state == undefined){
    return {}
  }

  switch (action.type) {
    case 'GET_USERS':
      state.users = []
      break
    default:
      break
  }

  return state
}

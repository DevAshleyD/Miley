import Store from '../stores'
import {shopActions, profileActions} from '../actions'
import {BASE_URL} from '../constants'

class API {
  constructor(opt={}){
    this.baseURL = '//' + window.location.hostname
    this.config = {
      token: opt.token
    }
  }

  request(dispatch){
    let {token} = this.config
    if (!token){
      return console.error('Error: Missing token')
    }

    let headers = new window.Headers({
      'X-CSRFToken': token,
      'Content-Type': 'application/json'
    })
    let data = JSON.stringify({
      'query': {
        'allProfiles': {}
      }
    })
    fetch(this.baseURL + '/shop/stores.json', {
      method: 'POST',
      headers: headers,
      credentials: 'include',
      body: data
    })
    .then(data => data.json())
    .then(data => {
      // TODO: Fix this with GraphSQL
      dispatch(shopActions.receiveShops(data))
      dispatch(profileActions.receiveProfiles(data))
    })
    .catch(err => console.error('Error:', err))
  }
}

let token = document.querySelector('meta[name=csrf_token]').content
export const api = new API({token: token})

// let dispatch = dispatcher.dispatch({
//   actionType: constants.RECEIVE_SHOPS,
//   shops: data.shops
// })

// let dispatch = function(data){}
let dispatch = Store.dispatch

api.request(dispatch)

export default api

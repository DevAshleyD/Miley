import constants from '../constants'
import dispatcher from '../dispatcher'
import {EventEmitter} from 'events'


let _shops = [
  {id: 0, name: 'Store 1', liked: false, created: 1301953702970},
  {id: 1, name: 'Store 2', liked: false, created: 1201953712278},
  {id: 2, name: 'Store 3', liked: false, created: 1401953702978},
]
function getShops(){
  return _shops
}

function requestShops(){
  let token = document.querySelector('meta[name=csrf_token]').content
  let headers = new window.Headers({
    'X-CSRFToken': token,
    'Content-Type': 'application/json'
  })
  let data = JSON.stringify({
    'query': {
      'allProfiles': {}
    }
  })
  fetch('http://localhost:8000/shop/stores.json', {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    body: data
  })
  .then(data => data.json())
  .then(data => {dispatcher.dispatch({
    actionType: constants.RECEIVE_SHOPS,
    shops: data.shops
  })})
  .catch(err => console.error('Error:', err))
}

function setShopLike(shop, user){
  _shops = _shops.map(x => {
    if (x.id == shop.id){
      x.liked = !shop.liked
    }
    return x
  })
}

// Inherit from EventEmitter
export const ShopStore = Object.assign({}, EventEmitter.prototype, {
  requestShops: requestShops,
  getShops: getShops,
  emitChange: function(){
    this.emit('CHANGE_EVENT')
  },
  addChangeListener: function(callback){
    this.on('CHANGE_EVENT', callback)
  },
  removeChangeListener: function(callback){
    this.removeListener('CHANGE_EVENT', callback)
  }
})


dispatcher.register(action => {
  switch (action.actionType) {
    case 'REQUEST_SHOPS':
      requestShops()
      break
    case 'RECEIVE_SHOPS':
      _shops = action.shops
      ShopStore.emitChange()
      break
    case 'LIKE_SHOP':
      setShopLike(action.shop, action.user)
      ShopStore.emitChange()
      break
    default:
      break
  }
})

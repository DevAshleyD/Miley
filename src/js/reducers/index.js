import {combineReducers} from 'redux'
import {actionTypes} from '../constants'
import {EventEmitter} from 'events'

const profileInitialState = {
  currentUser: {id: 99, name: 'Display Name'},
  users: []
}
const ProfileReducer = (state=profileInitialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      let newUser = {
        id: state.users.length,
        name: 'User '+state.users.length
      }
      return Object.assign({}, state, {users: state.users.concat(newUser)})
    case actionTypes.CURRENT_USER:
      return state.currentUser
    default:
      return state
  }
}
const shopInitialState = {
  shops: [],
  products: [],
  videos: []
}
const ShopReducer = (state=shopInitialState, action) => {
    switch (action.type) {

      case actionTypes.RECEIVE_SHOPS:
        return Object.assign({}, state, {shops: action.payload.shops  })

      case 'LIKE_SHOP':
        let filteredShops = state.shops.filter(shop => (action.payload.shop.id == shop.id))
        if (filteredShops.length <= 0){
          return state
        }
        let liked = filteredShops[0].liked?!filteredShops[0].liked:true
        let updatedShop = Object.assign({}, filteredShops[0], {liked: liked})
        return Object.assign({}, state, {shops: state.shops.map(shop => (
            (shop.id == updatedShop.id)?updatedShop:shop
          ))})
      default:
        break
    }

    return state
}

// export const Reducer = ShopReducer
export const Reducer = combineReducers({
  ProfileReducer,
  ShopReducer
})

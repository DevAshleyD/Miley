import {combineReducers} from 'redux'
import {actionTypes} from '../constants'
import {EventEmitter} from 'events'

const profileInitialState = {
  currentUser: {id: 99, name: 'Display Name'},
  users: [],
  activities: [
    {id: 0, username: 'User 1', title: 'is now following', picture: '', created: ''},
    {id: 1, username: 'User 2', title: 'is now following', picture: '', created: ''},
    {id: 2, username: 'User 3', title: 'is now following', picture: '', created: ''},
  ]
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

    case actionTypes.GET_PROFILES:

    case actionTypes.GET_PROFILES_ACTIVITIES:

    case actionTypes.RECEIVE_PROFILES:
      return Object.assign({}, state, {users: action.payload.users})

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

const TrendsInitialState = {
  trends: [
    {id: 1, name: 'Trend 1', url: ''},
    {id: 2, name: 'Trend 2', url: ''},
    {id: 3, name: 'Trend 3', url: ''},
    {id: 4, name: 'Trend 4', url: ''},
    {id: 5, name: 'Trend 5', url: ''},
    {id: 6, name: 'Trend 6', url: ''},
  ]
}
const TrendsReducer = (state=TrendsInitialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const NotificationsInitialState = {
  notifications: [
    {id: 0, message: 'You have bookmarked', ctx_count: '1 image', url: ''},
  ]
}
const NotificationsReducer = (state=NotificationsInitialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

// export const Reducer = ShopReducer
export const Reducer = combineReducers({
  ProfileReducer,
  ShopReducer,
  TrendsReducer,
  NotificationsReducer
})

import constants from '../constants'
import dispatcher from '../dispatcher'

export const getProfiles = () => {{
  type: constants.GET_PROFILES
}}

export const receiveProducts = products => ({
  type: constants.RECEIVE_PRODUCTS,
  products: products
})

export const receiveShops = shops => ({
  type: constants.RECEIVE_SHOPS,
  shops: shops
})

export const shopActions = {
  requestShops: () => {
    dispatcher.dispatch({
      actionType: constants.REQUEST_SHOPS
    })
  },
  receiveShops: () => {
    dispatcher.dispatch({
      actionType: constants.RECEIVE_SHOPS
    })
  },
  likeShop: (shop, user) => {
    dispatcher.dispatch({
      actionType: constants.LIKE_SHOP,
      user: user,
      shop: shop
    })
  }
}

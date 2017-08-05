import constants from '../constants'
import dispatcher from '../dispatcher'

export const receiveProducts = products => ({
  type: constants.RECEIVE_PRODUCTS,
  products: products
})

export const receiveShops = shops => ({
  type: constants.RECEIVE_SHOPS,
  shops: shops
})

export const shopActions = {
  likeShop: (shop, user) => {
    dispatcher.dispatch({
      actionType: constants.LIKE_SHOP,
      user: user,
      shop: shop
    })
  }
}

import {constants} from '../../constants'

export const receiveProducts = products => ({
  type: constants.RECEIVE_PRODUCTS,
  products: products
})

export const receiveShops = shops => ({
  type: constants.RECEIVE_SHOPS,
  shops: shops
})

export const likeShop = (user, shop) => ({
  type: actions.LIKE_SHOP,
  user: user,
  shop: shop
})

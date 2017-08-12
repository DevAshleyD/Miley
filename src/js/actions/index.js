import {actionTypes} from '../constants'

/**
  # Actions

  An action must:
    * Be a plain JAvaScript object.
    * Have a type property.

  An action may:
    * Have an error property, that represents an error.
    * Have a payload property.
    * Have a meta property.

  An action must not include properties other than type, paylod, error and meta.
*/

export const notificationActions = {
  requestNotifications: () => ({
    type: actionTypes.REQUEST_TRENDS,
    payload: null
  })
}

export const trendsActions = {
  requestTrends: () => ({
    type: actionTypes.REQUEST_TRENDS,
    payload: null
  })
}

export const profileActions = {
  requestProfiles: () => ({
    type: actionTypes.GET_PROFILES,
    payload: null
  }),
  receiveProfiles: (payload) => ({
    type: actionTypes.RECEIVE_PROFILES,
    payload: {
      users: payload.shops
    }
  }),
  requestActivities: () => ({
    type: actionTypes.GET_PROFILES_ACTIVITIES,
    payload: null
  }),
}

export const shopActions = {
  requestShops: () => ({
    type: actionTypes.REQUEST_SHOPS,
    payload: null
  }),
  receiveShops: ({shops}) => ({
    type: actionTypes.RECEIVE_SHOPS,
    payload: {
      shops: shops
    }
  }),
  likeShop: ({shop, user}) => ({
    type: actionTypes.LIKE_SHOP,
    payload: {
      shop: shop,
      user: user
    }
  })
}

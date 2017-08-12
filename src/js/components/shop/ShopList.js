import React from 'react'
import {ShopCard} from './ShopCard'

export const ShopList =  ({currentUser, shops, requestShops, like}) => (
  <div>
    {shops.map(shop => (
      <ShopCard
        key={shop.id}
        shop={shop}
        like={like.bind(this, shop, currentUser)} />
    ))}
  </div>
)

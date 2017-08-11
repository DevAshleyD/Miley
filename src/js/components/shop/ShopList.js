import React from 'react'
import {ShopCard} from './ShopCard'

export const ShopList =  ({currentUser, shops, requestShops, like}) => (
  <div>
    <h2>Shop List</h2>
    <p>You are: {currentUser.name}</p>
    {shops.map(shop => (
      <ShopCard key={shop.id} shop={shop} like={like.bind(this, shop, currentUser)} />
    ))}
  </div>
)

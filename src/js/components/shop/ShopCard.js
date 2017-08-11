import React from 'react'

export const ShopCard = ({shop, like}) => (
  <div className="card" onClick={like}>
    <div className="header">
      <a href="" className="avatar">
        <img src={shop.picture} alt={shop.username} />
      </a>
      <div className="user details">
        <span className="name">
          <a href="">{shop.username}</a>
        </span>
        <span className="meta">location</span>
      </div>
    </div>
    <div className="picture">
      <a href="">&nbsp;</a>
    </div>
    <div>
      <h3>Shop Name: {shop.name}</h3>
      <p>{(!!shop.liked)?<em>&hearts; liked</em>:<span>like?</span>}</p>
    </div>
  </div>
)

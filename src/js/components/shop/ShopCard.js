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
    <div className="description">
      <h3 className="title">Shop Name: {shop.name}</h3>
      <p>price: 99.99&dollar;</p>

      <div className="meta">
        <span>
          <a href={shop.url}>
            {(!!shop.liked)?<em>&hearts; liked</em>:<span>like?</span>}&nbsp;
          </a>
        </span>
        <span>
          <a href={shop.url}>0 views</a>&nbsp;
        </span>
        <span className="actions">
          <span>
            <a href={shop.url}>Action</a>&nbsp;
          </span>
        </span>
      </div>
    </div>
  </div>
)

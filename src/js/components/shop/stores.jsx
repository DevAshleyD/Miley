import React from 'react'

export const StoreCard = (props) => {
  const {store, like} = props
  return(
    <div className="card" onClick={like}>
      <div className="header">
        <a href={store.picture} className="avatar">
          <img src={store.picture} alt={store.username} />
        </a>
        <div className="user details">
          <span className="name">
            <a href="">{store.username}</a>
          </span>
          <span className="meta">location</span>
        </div>
      </div>
      <div className="picture">
        <a href="">
          &nbsp;
        </a>
      </div>
      <div>
        <p>{(!!store.liked)?<em>&hearts; liked</em>:<span>like?</span>}</p>
      </div>
      <hr />
    </div>
  )
}

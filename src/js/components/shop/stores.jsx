import React from 'react'

export const StoreCard = (props) => {
  const {store, like} = props
  return(
    <div className="store-card" onClick={like}>
      <div>
        <img src={store.picture.replace('%3A', ':').replace('%2520', ' ')} alt={store.username} />
        <strong>{store.username}</strong>
      </div>
      <div>
        <p>{(!!store.liked)?<em>&hearts; liked</em>:<span>like?</span>}</p>
      </div>
      <hr />
    </div>
  )
}

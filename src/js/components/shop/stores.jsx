import React from 'react'

export const StoreCard = (props) => {
  const {store, liked, like} = props
  return(
    <div className="store-card" onClick={like}>
      <div>
        <strong>{store.name}</strong>
      </div>
      <div>
        <p>{(!!liked)?<em>&hearts; liked</em>:<span>like?</span>}</p>
      </div>
      <hr />
    </div>
  )
}

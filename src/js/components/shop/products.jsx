import React from 'react'

export const ProductCard = (props) => {
  const {product} = props
  return (
    <div className="product-card">
      <span>{product.name}</span>
    </div>
  )
}

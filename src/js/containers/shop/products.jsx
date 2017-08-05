import React, {Component} from 'react'
import {ProductCard} from '../../components/shop/products.jsx'

export class ProductCardContainer extends Component{
  constructor(props){
    super()
    this.state = {
      name: null,
      price: null,
      picture: null
    }
  }

  shouldComponentUpdate(nextProps, nextState){
    return (this.state.price != nextState.price)
  }

  render(){
    const {product} = this.state

    return(
      <div className="product-card">
        <span>{product.name}</span>
      </div>
    )
  }
}

export class ProductListContainer extends Component{
  constructor(props){
    super()
    this.state = {
      products: []
    }
  }

  render(){
    const {products} = this.state

    return(
      <div className="product-list">
        {products.map(product => {
          <ProductCardContainer />
        })}
      </div>
    )
  }
}

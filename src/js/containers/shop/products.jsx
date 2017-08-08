import React, {Component} from 'react'
import {ProductCard} from '../../components/shop/products.jsx'
import {ShopStore} from '../../stores/shops-store'

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
    this._onChange = this._onChange.bind(this)
  }

  componentWillMount(){
    // Fetch data here
  }

  componentDidMount(){
    // Subscribe only to the relevant stores
    ShopStore.addChangeListener(this._onChange)
  }

  componentWillUnmount(){
    ShopStore.removeChangeListener(this._onChange)
  }

  _onChange(){
    // Pull back the data from the store
    // this.setState({
    //   products: []
    // })
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

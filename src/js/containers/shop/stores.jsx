import React, {Component} from 'react'
import {shopActions} from '../../actions'
import {constants} from '../../constants'
import {StoreCard} from '../../components/shop/stores.jsx'
import {ShopStore} from '../../stores/shops-store'

export class StoreCardContainer extends Component {
  constructor(props){
    super()
    this.state = {
      store: props.store,
      liked: false,
      user: props.user
    }
    this._like = this._like.bind(this)
  }

  _like(){
    shopActions.likeShop(this.state.store, {id: 1, name: 'User Name'})
  }

  render(){
    const {store, liked} = this.state
    return <StoreCard store={store} liked={liked} like={this._like} />
  }
}

export class StoreListContainer extends Component{
  constructor(props){
    super()
    this.state = {
      user: {},
      stores: [],
    }
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount(){
    // Fetch data here
    shopActions.requestShops()
    // Subscribe only to the relevant stores
    ShopStore.addChangeListener(this._onChange)
  }

  componentWillUnmount(){
    ShopStore.removeChangeListener(this._onChange)
  }

  _onChange(){
    // Pull back the data from the store
    this.setState({
      stores: ShopStore.getShops()
    })
  }

  render(){
    const {user, stores} = this.state

    return(
      <div className="store-list">
        <h2>Stores</h2>
        {stores.map(store => <StoreCardContainer
          key={store.id}
          user={user}
          store={store} />)}
      </div>
    )
  }
}

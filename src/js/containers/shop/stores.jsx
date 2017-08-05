import React, {Component} from 'react'
// import {likeShop} from '../../actions/shop'
import {constants} from '../../constants'
import {StoreCard} from '../../components/shop/stores.jsx'

export class StoreCardContainer extends Component {
  constructor(props){
    super()
    this.state = {
      store: props.store,
      liked: false
    }
    this.like = this.like.bind(this)
  }

  like(){
    this.setState({
      liked: !this.state.liked
    })
  }

  render(){
    const {store, liked} = this.state
    return <StoreCard store={store} liked={liked} like={this.like} />
  }
}

export class StoreListContainer extends Component{
  constructor(props){
    super()
    this.state = {
      stores: []
    }
  }

  componentWillMount(){
    let newStores = [
      {id: 0, name: 'Store 1'},
      {id: 1, name: 'Store 2'},
      {id: 2, name: 'Store 3'},
    ]
    this.setState({stores: newStores})
  }

  render(){
    const {stores} = this.state

    return(
      <div className="store-list">
        <h2>Stores</h2>
        {stores.map(store => <StoreCardContainer key={store.id} store={store} />)}
      </div>
    )
  }
}

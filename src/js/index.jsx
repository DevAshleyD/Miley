import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// import {StoreListContainer} from './containers/shop/stores.jsx'
// import {ProductListContainer} from './containers/shop/products.jsx'
import ShopList from './containers/shop/ShopList.js'
import {shopActions, counterActions} from './actions'
import Store from './stores'

class MockUserComponent extends Component {
  constructor(props){
    super(props)
    // this.state = props.store
    this._store = props.store

    this._onChange = this._onChange.bind(this)
    this._addUser = this._addUser.bind(this)
  }

  _onChange(){
    this.setState(this.props)
  }

  _addUser(){
    this._store.dispatch({type: 'ADD_USER'})
  }

  _renderUsers(users){
    return users.map(user => (
      <div key={user.id}>
        <strong>{user.id}</strong>
        <span> name: </span>
        <span>{user.name}</span>
      </div>
    ))
  }

  componentWillMount(){
    this._store.subscribe(this._onChange)
  }

  render(){
    const store = this._store.getState()
    const {users} = store.ProfileReducer
    const _addUser = this._addUser

    return (
      <div>
        <h2>Users {users.length}</h2>
        <div>
          <button onClick={_addUser}>Add user</button>
        </div>
        <div>{this._renderUsers(users)}</div>
      </div>
    )
  }
}

class MockComponent extends Component{
  constructor(props){
    super(props)
    this.state = props.store
    this._onChange = this._onChange.bind(this)
  }

  _add(){
    let store = this.props.store.getState()
    // counterActions.increment(this.props.store, store.ShopReducer)

    Store.dispatch({type: 'INCREMENT'})
    // shopActions.likeShop(this.state.store.ShopStore, {id: 0, name: 'User 0'})
  }

  _onChange(){
    this.setState(this.props)
  }

  componentWillMount(){
    this.props.store.subscribe(this._onChange)
  }

  render(){
    const store = this.props.store.getState()
    const {counter} = store.ShopReducer
    const _add = this._add.bind(this)

    return (<div>
      <div>
        Counting <strong>{counter}</strong>
      </div>
      <button onClick={_add}>Click Here</button>
    </div>)
  }
}

class App extends Component{
  constructor(props){
    super(props)
    this.state = props.store
  }

  render(){
    const {store} = this.props

    return(
      <div id="main-content">
        <div className="container">
          <ShopList store={store} />
        </div>
      </div>
    )
  }
}


const MainView = document.getElementById('miley')
if (!!MainView) {
  ReactDOM.render(<App store={Store} />, MainView)
}

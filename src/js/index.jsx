import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {StoreListContainer} from './containers/shop/stores.jsx'
import {ProductListContainer} from './containers/shop/products.jsx'
import {Reducer} from './reducers/index.js'

let store = createStore(Reducer)

class App extends Component{
  constructor(props){
    super()
    this.state = props.store
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(){
    this.setState(this.props)
  }

  componentDidMount(){
    this.props.store.subscribe(this.handleChange)
  }

  render(){
    return(
      <div id="main-content">
        <div className="container">
          <StoreListContainer />
          <ProductListContainer />
        </div>
      </div>
    )
  }
}

const MainView = document.getElementById('miley')
if (!!MainView) {
  ReactDOM.render(<App store={store} />, MainView)
}

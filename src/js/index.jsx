import React, {Component} from 'react'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom'
import Store from './stores'
import HomeFeed from './containers/pages/HomeFeed.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = props.store
  }
  render(){
    return <HomeFeed />
  }
}

const MainView = document.getElementById('miley')
if (!!MainView) {
  ReactDOM.render(<Provider store={Store}><App /></Provider>, MainView)
}

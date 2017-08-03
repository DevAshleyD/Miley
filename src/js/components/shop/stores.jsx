import React, {Component} from 'react'

const StoreCard = (props) => {
  const {store} = props
  return(
    <div className="store-card">
      <span>{store.name}</span>
    </div>
  )
}

export class StoreList extends Component{
  constructor(){
    super()
    this.state = {
      stores: []
    }
  }

  render(){
    const {stores} = this.state

    return(
      <div className="store-list">
        <h2>Stores</h2>
        {(stores).map(store => {
          <StoreCard />
        })}
      </div>
    )
  }
}

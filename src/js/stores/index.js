import {createStore, applyMiddleware} from 'redux'
import {EventEmitter} from 'events'
import {Reducer} from '../reducers/index.js'

/**
// Example for a simple store
class SimpleStore {
  constructor(reducer, initialState){
    this._reducer = reducer
    this._state = initialState
    this._subscribers = []
  }

  getState(){
    return this._state
  }

  subscribe(callback){
    this._subscribers.push(callback)
  }

  dispatch(action){
    this._state = this._reducer(this._state, action)
    this._subscribers.forEach(callback => callback())
  }
}

let simpleReducer = (state=initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_COUNTER':
        return Object.assign({}, state, {counter: state.counter+action.counter})
      default:
        console.log('default')
        break
    }

    return state
}
let store = new SimpleStore(simpleReducer, {counter: 0})
store.subscribe(() => {console.log('---> Callback test')})
store.dispatch({type: 'INCREMENT_COUNTER', counter: 2})
console.log(store.getState())
**/

// Flux vs. Redux:
// 1. Unlike Flux, Redux will have only one centeralized store.
// 2. Because there are no multiple stores, a dispatcher is not required
//      anymore, the dispach method will be called directly on the store.
// 3. Stores are much more light-weight, because the reducers will decide
//      how to manage the states.
const Store = createStore(Reducer)
let unsubscribe = Store.subscribe(() => {
  console.log('---> New state')
  console.log(Store.getState())
})

export default Store

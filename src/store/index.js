import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk';

import mainReducers from './main/main.reducers'

const reducers = combineReducers({
  main: mainReducers,
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

export default store

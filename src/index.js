import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import RoutesList from './routes/'
import storeConfigurer from './store/'
import getUserGists from './actions/gist'
import registerServiceWorker from './registerServiceWorker'
const store = storeConfigurer()


ReactDOM.render(
  <Provider store={store}>
    <RoutesList />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();

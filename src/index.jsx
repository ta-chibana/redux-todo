import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, BrowserRouter } from 'react-router-dom'
import todoApp from './reducers'
import App from './components/App'

const store = createStore(todoApp)

render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App}>
      </Route>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)


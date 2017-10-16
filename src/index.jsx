import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, BrowserRouter } from 'react-router-dom'
import todoApp from './reducers'
import App from './components/App'
import TodoDetail from './containers/TodoDetail'

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/todos/:id" component={TodoDetail} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)


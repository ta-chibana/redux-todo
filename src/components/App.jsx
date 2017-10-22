import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import styles from 'css-modules-test/lib/css/styles.css'
import 'css-modules-test/lib/css/styles.css'

const Article = require('css-modules-test').default

const App = () => (
  <div>
    <Article title="Hello!!" />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App

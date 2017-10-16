import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Todo = ({ id, onClick, completed, title }) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <Link to={`/todos/${id}`}>
      {title}
    </Link>
    <button onClick={onClick}>
      {completed ? 'undo' : 'complete'}
    </button>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired
}

export default Todo

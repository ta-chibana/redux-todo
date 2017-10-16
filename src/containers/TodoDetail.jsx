import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

const TodoDetail = ({ todo, onClick }) => (
  <div>
    <div>
      {todo.id}: {todo.title}
    </div>
    <div>
      {todo.description}
    </div>
    <div>
      status: {todo.completed ? 'completed' : 'incomplete'}
    </div>
    <Link to="/">
      > TodoList
    </Link>
    <button onClick={() => onClick()}>Delete</button>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    todo: state.todos.find(todo => (
      todo.id === parseInt(ownProps.match.params.id)
    ))
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(deleteTodo(parseInt(ownProps.match.params.id)))
      ownProps.history.push('/')
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoDetail)

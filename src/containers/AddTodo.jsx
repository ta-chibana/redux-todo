import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let title
  let description

  return (
  <div>
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        dispatch(addTodo(title.value, description.value))
        title.value = ''
        description.value = ''
      }}
    >
      <div>
        title:
        <input ref={node => {title = node}} />
      </div>
      <div>
        description:
        <textarea ref={node => {description = node}} />
      </div>
      <button type="submit">
        Add Todo
      </button>
    </form>
  </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo

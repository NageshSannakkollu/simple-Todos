// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosDetails, onDeleteTodo} = props
  const {title, id} = todosDetails

  const deleteTodo = () => {
    onDeleteTodo(id)
    console.log(`ID:${id}`)
  }

  return (
    <li className="todos-list-container">
      <div className="main-todos-container">
        <p className="title">{title}</p>
        <button type="button" className="delete-button" onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem

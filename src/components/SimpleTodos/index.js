import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

console.log(initialTodosList)

class SimpleTodos extends Component {
  state = {initialTodoItems: initialTodosList}

  onDeleteTodo = id => {
    const {initialTodoItems} = this.state

    const filteredTodosList = initialTodoItems.filter(
      eachTodo => eachTodo.id !== id,
    )
    this.setState({initialTodoItems: filteredTodosList})
  }

  render() {
    const {initialTodoItems} = this.state
    const lengthOfTodos =
      initialTodoItems.length > 0 ? initialTodoItems : <p>No Todods</p>

    return (
      <div className="main-container">
        <div className="todos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul className="todos-items-container">
            {lengthOfTodos.map(eachTodo => (
              <TodoItem
                todosDetails={eachTodo}
                key={eachTodo.id}
                onDeleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos

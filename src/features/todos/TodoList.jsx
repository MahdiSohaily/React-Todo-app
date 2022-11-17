import TodoListItem from './TodoListItem'
import { useSelector } from 'react-redux'
import { selectTodos } from './todosSlice'

const TodoList = () => {
    const todos = useSelector(selectTodos)

    const renderedListItems = todos.map((todo) => {
        return <TodoListItem key={todo.id} todo={todo} />
    })

    return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList

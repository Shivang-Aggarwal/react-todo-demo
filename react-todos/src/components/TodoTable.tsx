import TodoRowItem from './TodoRowItem.js'
import { TodoModel } from '../models/TodoModel.js'

function TodoTable(props: {todos: TodoModel[]}) {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Description</th>
                    <th scope="col">Assigned</th>
                </tr>
            </thead>
            <tbody>
                {props.todos.map(todo => (
                    <TodoRowItem
                        key={todo.rowNumber}
                        rowNumber={todo.rowNumber}
                        rowDescription={todo.rowDescription}
                        rowAssigned={todo.rowAssigned}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default TodoTable
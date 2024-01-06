import { useContext } from "react";
import TodoContext from "../context/TodoProvider";
import { Link } from "react-router-dom";
const Todo = () => {

    const { todos } = useContext(TodoContext);

    return (
        <>
            <div className="container mt-5">
                <h1>Todo List</h1>
                <ol className="list-group list-group-numbered mb-5">
                    {
                        todos.map((todo) => (
                            <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">{todo.title}</div>
                                    {todo.description}
                                </div>
                                {
                                    todo.status === 'completed' ? <span className="badge bg-success rounded-pill">{todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}</span> :
                                        <span className="badge bg-warning rounded-pill">{todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}</span>
                                }
                            </li>
                        ))
                    }
                </ol>
                <Link to="/create-todo">

                    <button className="btn btn-primary"> Create Todo</button>
                </Link>
            </div>
        </>
    )
}

export default Todo
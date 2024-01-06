import { createContext, useState } from 'react'
import useTodo from '../hools/useTodo';

const TodoContext = createContext();

const TodoProvider = ({ children }) => {

    const { todos, setTodos } = useTodo();

    const [disabled, setDisabled] = useState(true);

    const [formTodoData, setFormTodoData] = useState({
        title: '',
        description: '',
        status: 'pending'
    })

    const handleChangeData = (e) => {
        const newData = {
            ...formTodoData,
            [e.target.name]: e.target.value
        };
        console.log(newData)
        setFormTodoData({ ...newData });
        console.log(formTodoData)
        if (validateEmptyValues()) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }


    const validateEmptyValues = () => {
        return Object.values(formTodoData).includes("");
    }

    const validateTitle = () => {

        return todos.some((todo) => {
            return todo.title === formTodoData.title
        })
    }

    const validateOnlyAlfanumeric = () => {
        const specials = /^[a-zA-Z0-9 .,]*$/;
        return Object.values(formTodoData).every((value) => {
            return specials.test(value)
        })
    }


    const createTodo = () => {

        let newTodos = [
            ...todos,
            {
                id: todos.length + 1,
                ...formTodoData,
            }
        ];

        setTodos(newTodos)

    }

    return (
        <TodoContext.Provider value={{
            todos,
            formTodoData,
            handleChangeData,
            createTodo,
            validateEmptyValues,
            validateTitle,
            validateOnlyAlfanumeric
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export { TodoProvider };

export default TodoContext;
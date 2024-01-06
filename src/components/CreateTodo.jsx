import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoProvider';
import Error from './Error';
import { useNavigate } from 'react-router-dom';

const CreateTodo = () => {

    const { handleChangeData , createTodo , validateEmptyValues , validateTitle , formTodoData , validateOnlyAlfanumeric} = useContext(TodoContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
       if(validateEmptyValues()) {
            setError('Todos los campos son obligatorios!');
        return;
       }

       if(validateTitle()) {
            setError('Esta tarea ya existe!');
        return;
       }

       if(!validateOnlyAlfanumeric()){
            setError('Debe ingresar datos validos');
        return;
       }
       setError("");
       createTodo();
       navigate('/');
    }

    const handleBack = () => {
        navigate('/');
    }
    

    return (
        <>
            <div className='container mt-5'>
            <h1>Create Todo</h1>
            {error && <Error error = {error} />}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Title</label>
                    <input type="text" className="form-control"  value={formTodoData.title} id="title" name="title" placeholder="Title" onChange={handleChangeData} />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Description</label>
                    <textarea type="text" className="form-control"  value={formTodoData.description} id="description" name="description" placeholder="Description" onChange={handleChangeData} ></textarea>
                </div>
                {/* <div>
                    <label htmlFor="gender">Status</label>
                    <select id="status" name="status" onChange={handleChangeData} value={formTodoData.status}>
                        <option value="">Please select a status</option>
                        <option value="completed">Completed</option>
                        <option value="pending">Pending</option>
                    </select>
                </div> */}
                <div className="mb-3">
                     <button type="button" className="btn btn-default" onClick={handleBack}>Back</button>
                    <button type="submit" className="btn btn-primary">Create</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default CreateTodo
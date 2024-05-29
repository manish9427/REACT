import { useState } from "react";
export const Todo = () => {
    const [todo,setTodo]=useState('');
    const [todos,setTodos]=useState([]);
    const handleInput = (event) =>{
        setTodo(event.target.value)
    }

    const handleSubmit = () => {
        if(todo.trim()){
            setTodos([...todos,todo])
            setTodo('');
        }

    }

    return (
        <div>
            <h1>todo</h1>
            <input type="text" onChange={handleInput}  value={todo}/>
            <button onClick={handleSubmit}>Submit</button>
<hr />
            <ul>{todos.map((value,index)=>(
                <li key={index}>
                    {value}
                </li>
            ))}</ul>
        </div>
    )    
}
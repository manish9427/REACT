import React , {useState} from 'react';

export const Todo = () => {
    const [todo,setTodo]=useState('');
    const [todos,setTodos]=useState([]);

    const style ={
        width:"300px",
        margin:"10px auto",
        padding:"30px",
        boxShadow:"0px 0px 10px black"
    }

    const handleInputChange = (event)=>{
        setTodo(event.target.value);
    }

    const handleSubmit = () => {
        if(todo.trim()){
            setTodos([...todos,todo]);
            setTodo('');
        }
    }
    return (
        <>
            <h1>Todo</h1>
            <div style={style}>
                <input onChange={handleInputChange} type="text"  placeholder='Enter the task' value={todo}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
            <h1>List</h1>
            <ul style={style}>
                {
                    todos.length>0 ? (todos.map((item,index)=>(<li key={index}>{item}</li>))):(<p>Todo is Empty</p>)
                }
            </ul>
        </>
    )
}
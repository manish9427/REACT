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
    <div style={style}>
        <h1>Todo</h1>
        <input onChange={handleInputChange} type="text"  placeholder='Enter the task' value={todo}/>
        <button onClick={handleSubmit}>Submit</button>
        <div>
            {
                todos.map((item,index)=>(<h1 key={index}>{index+1} ={item}</h1>))
            }
        </div>
    </div>
    )
}
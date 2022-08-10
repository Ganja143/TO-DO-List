import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen, faTrash,faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import Popup from'reactjs-popup';
import './todolistStyle.css';

library.add(faTrash, faPen, faCheckSquare);


const TodoList = () =>{
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
    const [todoEditing,setTodoEditing]= React.useState(null);
    const [editinText, setEditingText]= React.useState('');
  
    const addTodo =(todo)=>{
      const newTodo = {
        id:Math.random(),
        todo:todo
      }
      console.log(todo)
      //add to do list
      setList([...list, newTodo]);
      //clear input box
      setInput("");
    }
    const deleteTodo=(id)=>{
      const newList = list.filter((todo)=> todo.id !== id);
      setList(newList);
    }

    function WorkDone(id){
        const updateTodos = list.map((todo)=>{
            if(todo.id===id){
                todo.completed = !todo.completed
            }
            return todo;
        });
        setList(updateTodos);
    }
    function editTodo(id){
      
        const updateTodos = list.map((todo)=>{
            if(todo.id===id){
                todo.todo = editinText;
              
            }
           console.log(todo)
            return todo;
        });
        setList(updateTodos);
        setTodoEditing(null);
        

    }
    
return(<div>


  <div  className='split left'>

         <div className='left2'>
            <div className="linki">
              <a href="">My day</a><br></br>
              <a href="">Important</a><br></br>
              <a href="">Plannned</a><br></br>
              <a href="">All</a><br></br>
              <a href="">Completed</a><br></br>
              <a href="">Assigned to me</a><br></br>
              <a href="">Tasks</a><br></br>
         </div>
           
   </div>
      

  </div>
      

       

        <div className='split right'>
        <h1>Ganja</h1>
        
      
       
        <ul>
           {
             list.map((todo)=>(
               <li key={todo.id}>
                <p className='Display'>
                 
  
               {todo.todo}
               {/* <input type="checkbox" className='checkMe'
                onChange={() => WorkDone(todo.id)}
                checked={todo.completed}/> */}
               <Popup trigger={<span className='Ico'><FontAwesomeIcon className='icons' icon="fa-solid fa-pen" onClick={()=> setTodoEditing(todo.id)}/></span>} position = "left center">
               <input type="text" placeholder='Enter edited text' onChange={(e)=>setEditingText(e.target.value)}/>
               <span className='Ico' onClick={()=> editTodo(todo.id)}><FontAwesomeIcon icon="fas fa-check-square" /></span>
               </Popup>
                 <span className='Ico'><FontAwesomeIcon className='icons' icon="trash" onClick={()=> deleteTodo(todo.id)}/></span>
               
                 </p>
               </li>
             ))
           }
       
       
        </ul>
        <div className='formlam'>
        <input type="text" placeholder='Enter task' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button onClick={()=>addTodo(input)} className='addButton'>Add Task</button><br></br>
        </div>
       
        </div> 
        </div>

)

}

export default TodoList;
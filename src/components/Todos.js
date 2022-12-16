// List of todo items
import React from 'react'
import Todo from './Todo';
import AddTodo from './AddTodo';
import {useState} from 'react';

const Todos = () =>{
    //state variable for todos
    // here the useState initially  checks for any todo items present in the localStorage, if not anything found in LS it will initialize with empty array 
    const [todos,setTodos] = useState(
        localStorage.getItems("todos")
        ? JSON.parse(localStorage.getItem("todos"))
       : []);

       function getTime(){
        let d = new Date();
        var n = d.getTime();
        return n;
       }

const addNewTodo = value =>{
     const todosArr = [...todos];
     todosArr?.push({
        id: getTime(),
        value: value,
        });
        setTodos(todosArr);
        localStorage.setItem("todos", JSON.stringify(todosArr))
}

    return(
        <div>
            {/* checking for the length of todos , if there is no todos then it will say no todos added */}
            {todos?.length <=0 && (<div><p>No Todos Added</p></div>)}
            <table className='table'>
                <tbody>
                   {todos.map((todo, index)=>(
                    //  tr tags will not be presented without a key
                    <tr key={todo.id}>
                        <Todo
                              index={index+1}
                              todo={todo}/>
                    </tr>
                   ))}
                   <tr>
                      <td className='text-center'>
                          <AddTodo funAddTodo={addNewTodo}/>
                      </td>
                   </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Todos;
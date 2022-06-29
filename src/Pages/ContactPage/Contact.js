import React, { useEffect, useState } from "react";
import './Contact.css'
import ToDoForm from '../../Components/ToDoForm/Toform'
import ToDo from '../../Components/ToDo/ToDo'
import { useDispatch,useSelector } from "react-redux";
import { setLoading } from "../../redux/contact/contact.action";




const Contact = ()=>{

    const dispatch=useDispatch()
    const lodr=useSelector((state)=>state.contact.loading)
    const [todos,setTodos]=useState([])
    useEffect(()=>{
        dispatch(setLoading)
    },[])
    alert(lodr)
    

    const addTask=(userInput)=>{
        if(userInput){
            const newItem={
                id:Math.random().toString(36).substring(2,9),
                task:userInput,
                complete:false
            }
            setTodos([...todos,newItem])
            console.log(newItem);
        }
    }

    const removeTask=(id)=>{
        setTodos([...todos.filter((todo)=>todo.id !==id)])
    }
    const handleToggle=(id)=>{
        setTodos([
            ...todos.map((todo)=>
                todo.id === id?{...todo,complete: !todo.complete}:{...todo}
            )
        ])
    }
    return(
        <div>
            <div>
                <h1>Cank: {todos.length}</h1>
            </div>
            <ToDoForm addTask={addTask}/>
            {todos.map((todo)=>{
                return(
                    <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                    />
                )
            })}
        </div>
    )
}
export default Contact
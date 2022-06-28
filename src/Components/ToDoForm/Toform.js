import React, { useState } from "react";
import './Toform.css'

function ToDoForm({addTask}){
    const [userInput,setUserInput]=useState('')
    const handleChang=(e)=>{
        setUserInput(e.currentTarget.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }
    const handleKeyPress=(e)=>{
        if(e.key==='Enter'){
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            value={userInput}
            type='text'
            onChange={handleChang}
            onKeyDown={handleKeyPress}
            placeholder='Grel nshankutyuny......'
            />
            <button>Sexmel</button>
        </form>
    )
}
export default ToDoForm
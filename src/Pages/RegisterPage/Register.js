import React from "react";
import './Register.css'
import { useForm } from "react-hook-form";
import Input from "../../Components/Input/Input";


export default function Register(){
    const {handleSubmit,control}=useForm()
    const onSubmit=(data)=>console.log(data);
    return(
        <div className="formheader">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="firstName" control={control} type='text' placeholder="first name"/>
                <Input name="lastName" control={control} type='text' placeholder="last name"/>
                <Input name="email" control={control} type='email' placeholder="email"/>
                <Input name="password" control={control} type='password' placeholder="password"/>
                <input className="inpsubmit" value={'Submit'} type='submit'/>
            </form>

        </div>
    )

}


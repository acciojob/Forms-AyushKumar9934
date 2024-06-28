import React, { useState } from 'react'

const FormState = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPass,setConfirmPass]=useState("");
    function handleSubmit(event){
        event.preventDefault();
        console.log(name,email,password,confirmPass);
    }
  return (
    <div><form id="info-form" onSubmit={handleSubmit}>
    <label htmlFor="full_name">Full Name: </label>
    <input value={name} id="full_name" onChange={(e)=>{setName(e.target.value)}}/><br></br>
    <label htmlFor="email">Email</label>
    <input id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br></br>
    <label htmlFor="password">Password: </label>
    <input id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
      <label htmlFor="password_confirmation">Confirm Password: </label>
    <input id="password_confirmation" value={confirmPass} onChange={(e)=>setConfirmPass(e.target.value)}/><br></br>
    <button type='submit' id="submit">Submit</button>
    
    
    </form></div>
  )
}

export default FormState
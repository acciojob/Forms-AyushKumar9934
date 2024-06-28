import React, { useRef } from 'react'

const FormRef = () => {
const nameref=useRef();
const email=useRef();
const password=useRef();
const confirmPass=useRef();
    function handleSubmit(event){
        event.preventDefault();
        console.log("by use ref",nameref.current.value);
        console.log("by use ref",email.current.value);
        console.log("use ref",password.current.value);
        console.log("use ref",confirmPass.current.value);

    }

  return (
    <div><form id="info-form" onSubmit={handleSubmit}>
        <label htmlFor="full_name">Full Name: </label>
        <input id="full_name" ref={nameref}/><br></br>
        <label htmlFor="email">Email</label>
        <input id="email" ref={email} /><br></br>
        <label htmlFor="password">Password: </label>
        <input id="password" ref={password}/><br></br>
          <label htmlFor="password_confirmation">Confirm Password: </label>
        <input id="password_confirmation" ref={confirmPass}/><br></br>
        <button type='submit' id="submit">Submit</button>
        
        
        </form></div>
  )
}

export default FormRef
import React from 'react'

const Form = () => {

  return (
    <div><form id="info-form">
        <label htmlFor="full_name">Full Name: </label>
        <input id="full_name"/><br></br>
        <label htmlFor="email">Email</label>
        <input type='email' id="email" /><br></br>
        <label htmlFor="password">Password: </label>
        <input type='password' id="password"/><br></br>
          <label htmlFor="password_confirmation">Confirm Password: </label>
        <input id="password_confirmation"/><br></br>
        <button type='submit' id="submit">Submit</button>
        
        
        </form></div>
  )
}

export default Form
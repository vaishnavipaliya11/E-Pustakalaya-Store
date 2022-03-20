import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div>
    <div className="login-container">
    <div className="login-card">
      <h1>Log-in</h1>
      <form>
        <input type="text" name="user" placeholder="Username"/>
        <input type="password" name="pass" placeholder="Password"/>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
        <label className="label" for="label"> remember me </label>
        <input type="submit" name="login" className="login login-submit" value="login"/>
        <p>not a member yet?</p><a className="signup" href="">sign-up now</a>
      </form>
    </div>
  </div>
    </div>
  )
}

export  {Login}
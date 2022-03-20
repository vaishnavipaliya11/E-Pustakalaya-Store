import React from 'react'
import "./Sign.css"

function SignUp () {
  return (
    <div>
    <div className="login-container">
        <div className="login-card">
            <h1>Sign-up</h1>
            <form>
                <input type="text" name="user" placeholder="Username"/>
                <input type="password" name="pass" placeholder="Password"/>
                <input type="password" name="pass" placeholder="Confirm Password"/>
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                <label for="vehicle1"> I agree to the <a class="terms" href="">Tearms and Conditions</a></label>
                <input type="submit" name="login" className="login login-submit" value="Signup"/>
            </form>
        </div>
    </div>
    </div>
  )
}

export {SignUp}
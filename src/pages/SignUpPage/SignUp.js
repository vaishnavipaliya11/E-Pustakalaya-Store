import React from 'react'
import { Link } from 'react-router-dom'
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
                <label for="agreement"> I agree to the <Link class="terms" href="">Tearms and Conditions</Link></label>
                <input type="submit" name="login" className="login login-submit" value="Signup"/>
            </form>
        </div>
    </div>
    </div>
  )
}

export {SignUp}
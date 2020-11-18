import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <div className="auth__container_login">
            <div className="auth__title_div">
                <h3 className="auth__login_title">Login</h3>
            </div>
            <form>
                <input autocomplete="off" className="auth__input" type="text" placeholder="Name" name="email"/>
                <input autocomplete="off" className="auth__input" type="text" placeholder="Email" name="email"/>
                <input autocomplete="off" className="auth__input" type="password" placeholder="Password" name="password" />
                <input autocomplete="off" className="auth__input" type="password" placeholder="Repeat your password" name="password" />
                <button type="submit" 
                className="btn btn-secondary"
                >
                    Crear cuenta</button>
                <hr />
               
                <div className="auth__createAcount_link">
                <Link to="/auth/login" className="link link-primary"> Already have account? Log in</Link>
                </div>
            </form>
        </div>
    )
}

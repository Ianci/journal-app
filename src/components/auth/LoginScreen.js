import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <div className="auth__container_login">
            <div className="auth__title_div">
                <h3 className="auth__login_title">Login</h3>
            </div>
            <form>
                <input autocomplete="off" className="auth__input" type="text" placeholder="Email" name="email"/>
                <input autocomplete="off" className="auth__input" type="password" placeholder="Password" name="password" />
                <button type="submit" 
                className="btn btn-primary"
                >
                    Ingresar</button>
                <hr />
                <div className="auth__loginwith_container">
                    <p className="auth__login_p">Login with:</p>
                <div className="google-btn">
                    <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>

                    <p className="btn-text"><b>Sign in with google</b></p>
                    </div>
                </div>
                <div className="auth__createAcount_link">
                <Link to="/auth/register" className="link"> Create new account</Link>
                </div>
            </form>
        </div>
    )
}

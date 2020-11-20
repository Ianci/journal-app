import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startFacebookLogin, startGoogleLogin, startLogin } from '../../actions/auth'
import { setErrorAction } from '../../actions/ui'

export const LoginScreen = () => {

    const stateRedux = useSelector(stateR => stateR)
    const { ui } = stateRedux
    const { msgError, loading } = ui
    const dispatch = useDispatch()
    const history = useHistory()
    const { state , handleChange } = useForm({email: "", password: ""})

    const { email, password} = state

    const handleSubmit = e => {
        e.preventDefault()
        if(isValid()){
            dispatch(startLogin(email, password))
            history.push('/')
        }
        
    }

    //Auth de google
    const handleGoogleLogin= () => {
        dispatch( startGoogleLogin() )
    }

    const handleFacebookLogin = () =>{
        dispatch( startFacebookLogin() )
    }

    //Validacion
    const isValid = () => {
        if(email.length === 0){
            dispatch(setErrorAction('Please insert your email'))
            return false
        } else if (password.length === 0){
            dispatch(setErrorAction('Please insert your password'))
            return false
        }
        return true
    }


    return (
        <div className="auth__container_login">
            <div className="auth__title_div">
                <h3 className="auth__login_title">Login</h3>
            </div>
            <div className="auth_error_message">
            { msgError && <p className="auth__p-error">{msgError}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} autocomplete="off" className="auth__input" type="text" placeholder="Email" name="email" value={email}/>
                <input onChange={handleChange} autocomplete="off" className="auth__input" type="password" placeholder="Password" name="password" value={password}/>
                <button type="submit" 
                className="btn btn-primary"
                disabled={loading}
                >
                    Ingresar</button>
                <hr />
                <div className="auth__loginwith_container">
                    <p className="auth__login_p">Login with:</p>

                <div className="google-btn"
                onClick={handleGoogleLogin}>
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                    </div>
                </div>
                <div onClick={handleFacebookLogin}>
                    <button type="button" className="google-btn btn-facebook">Continue with Facebook</button>
                </div>
                <div className="auth__createAcount_link">
                <Link to="/auth/register" className="link"> Create new account</Link>
                </div>
            </form>
        </div>
    )
}

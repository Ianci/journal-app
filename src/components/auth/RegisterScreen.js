import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { removeError, setErrorAction } from '../../actions/ui'
import { registerWithEmail } from '../../actions/auth'

export const RegisterScreen = () => {
 
    const dispatch = useDispatch();
    //State de la app
    const stateRedu = useSelector(stateRedux => stateRedux);
    const { ui } = stateRedu
    const { msgError, loading } = ui
    
    //Custom hook para leer los inputs del usuario
    const { state , handleChange } = useForm({name: "", email: "", password: "", repeat: ""})
    const { name, email, password, repeat } = state
    
    //Form submit
    const handleSubmit = e => {
        e.preventDefault()
        if ( isFormValid()){
           dispatch(registerWithEmail(email, password, name))
        }
    }
    //Validaciones
    const isFormValid = () => {
        if (name.trim().length === 0){
            dispatch(setErrorAction('Please enter a valid name'))
            return false;
        }else if (name.length >= 12){
            dispatch(setErrorAction('Your name is too long'))
            return false;    
        } else if (!validator.isEmail(email)){
            dispatch(setErrorAction('Please enter a valid email'))
            return false;
        } else if ( password.length < 8){
            dispatch(setErrorAction('The password must be at least 9 characters long'))
            return false;
        } else if ( password !== repeat){
            dispatch(setErrorAction('The passwords must be equal'))
            return false
        }
        dispatch(removeError());
        return true;
        
    }


    
    return (
        <div className="auth__container_login">
            <div className="auth__title_div">
                <h3 className="auth__login_title">Create account</h3>
            </div>
            <div className="auth_error_message">
            { msgError && <p className="auth__p-error">{msgError}</p>}
            </div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={name} autoComplete="off" className="auth__input" type="text" placeholder="Name" name="name"/>
                <input onChange={handleChange} value={email}  autoComplete="off" className="auth__input" type="text" placeholder="Email" name="email"/>
                <input onChange={handleChange} value={password} autoComplete="off" className="auth__input" type="password" placeholder="Password" name="password" />
                <input onChange={handleChange} value={repeat} autoComplete="off" className="auth__input" type="password" placeholder="Repeat your password" name="repeat" />
                
                <button type="submit" 
                className="btn btn-secondary"
                disabled={loading}
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

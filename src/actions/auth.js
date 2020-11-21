import { types } from "../types/types"
import { faceAuthProvider, firebase, googleAuthProvider } from '../firebase/config'
import { finishLoading, setErrorAction, startLoading } from "./ui"
import Swal from 'sweetalert2'


export const startLogin = (email, password) => {
    return(dispatch) => {
        dispatch(startLoading())
       firebase.auth().signInWithEmailAndPassword(email, password)
       .then(({user}) =>{
        console.log(user)
           dispatch(login(user.uid, user.displayName))
           dispatch(finishLoading())
       })
       .catch(error =>{
            dispatch(finishLoading())
            Swal.fire(
                'Error', error.message, 'error'
            )
           
       })
     
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then( ({user}) => {
           
            dispatch(
                login(user.uid, user.displayName)
            )
           
        })
    }
}

export const startFacebookLogin = () => {
    return(dispatch) => {
        firebase.auth().signInWithPopup(faceAuthProvider)
        .then( ({user}) => {
            dispatch(
                login(user.uid, user.displayName)
            )
        })
    }
}

export const registerWithEmail = (email, password, name) =>{
    return(dispatch)=>{
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async({ user }) => {
            await user.updateProfile({ displayName: name});
            dispatch(
                login(user.uid, user.displayName)
            )
            
        }).catch(error =>{
            
            
            Swal.fire(
                'Error', error.message, 'error'
            )
        })
    }
}

export const logOutFromAccount = () =>{
    return(dispatch)=>{
        firebase.auth().signOut()
        .then(()=>{
            dispatch(logout)
        }).catch(error =>{
            console.log(error)
        })
    }
}
//Esta es la action de todo y el resto son las funciones para tomar los datos desde diferentes fuentes
export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
    
}
export const startLogOut = () =>{
    return async(dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
    }
}

export const logout = () => {
    return {
        type: types.logout
    }
}

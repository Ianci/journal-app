import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/todos/TodoScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/config';
import { useDispatch} from 'react-redux';
import { login } from '../actions/auth';
import { LoadingScreen } from '../components/loadingscreen/LoadingScreen';
import { PublicRoute} from '../routes/PublicRoutes'
import { PrivateRoute} from '../routes/PrivateRoutes'
export const AppRouter = () => {
  const [check, setCheck] = useState(true)
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const dispatch = useDispatch()
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(user?.uid){
       dispatch(login(user.uid, user.displayName))
       setisLoggedIn(true);
      } else {
        setisLoggedIn(false);
      }
      setCheck(false)
    })

  }, [dispatch, setCheck, setisLoggedIn])


  //Loading screen
  if(check){
    return (<LoadingScreen />)
  }

    return (
        <Router>
              <div>
            <Switch>
                  
                    <PublicRoute 
                    isAuthenticated={isLoggedIn}
                    path="/auth" component={AuthRouter} />
                    <PrivateRoute 
                    isAuthenticated={isLoggedIn}
                    exact path="/" component={JournalScreen} />

                    <Redirect to="/auth/login"/>
                
            </Switch>
            </div>
        </Router>
        
    )
}

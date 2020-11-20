import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/config';
import { useDispatch} from 'react-redux';
import { login } from '../actions/auth';
import { LoadingScreen } from '../components/loadingscreen/LoadingScreen';

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

  if(check){
    return (<LoadingScreen />)
    
  }

    return (
        <Router>
              <div>
            <Switch>
              
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />

                    <Redirect to="/auth/register"/>
                
            </Switch>
            </div>
        </Router>
        
    )
}

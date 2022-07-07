import {Switch, Route} from 'react-router-dom'
import { useEffect } from 'react';
import { useState } from 'react';
import Dashboard from '../components/Pages/Dashboard';
import { Login } from '../components/Pages/Login';
import { Register } from '../components/Pages/Register';
import ROUTES from '../constants/routes';


function Routes() {

  const [authenticated, setAuthenticated] = useState(false)

    useEffect(()=>{
        const token = localStorage.getItem('@projetofinal:token');
        if (token) {
            setAuthenticated(true)
        }
    },[authenticated]);

    return (
      
       <>
          <Switch>
  
            <Route exact path={ROUTES.register}> 
            <Register authenticated={authenticated}/>
            </Route>
  
            <Route exact path={ROUTES.login}> 
            <Login authenticated={authenticated} setAuthenticated={setAuthenticated}/>
            </Route>

            <Route exact path={ROUTES.dashboard}> 
            <Dashboard authenticated={authenticated}/>
            </Route>
  
          </Switch>
        </>
    );
}
  
  export default Routes;
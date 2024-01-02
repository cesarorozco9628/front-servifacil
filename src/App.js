import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Admin from './components/Admin';
import Employees from './components/Employees';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Login';
import GetRol from './components/GetRol';

 


function App() {
  return (
        <Router>
            <Switch>
                <Route exact path='/Home'>
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Admin'>
                    <ProtectedRoute>
                        <GetRol rol="1" children={<Admin/>} />
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Emp'>
                    <ProtectedRoute >
                        <GetRol rol="2" children={<Employees/>}/>
                    </ProtectedRoute>
                </Route>
                <Route exact path='/Login'>
                    <Register/>
                </Route>
                <Route exact path=''>
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                </Route>
                <Route path='*'>
                    <p>Not Found 404</p>
                </Route>
            </Switch>
        </Router>
  );
}

export default App;

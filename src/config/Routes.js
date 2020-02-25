import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import News from '../pages/News';
import List from '../pages/List';

const Routes = () => {
  // const [isLoggedin, setIsLoggedin] = useState(false);

  const loginAction = () => {
    // setIsLoggedin(true);
    localStorage.setItem('isLoggedin', true);
  }

  return (
    <Router>
      <div>
        {/* Navigasi */}
        <ul>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/list">List</a>
          </li>
        </ul>
        <hr />

        {/* Route terdaftar */}
        <Switch>
          <Route exact path="/">
            {/* Halaman per route */}
            <News />
          </Route>
          <Route path="/login">
            <div>
              <h1>Need login access</h1>
              <button onClick={() => loginAction()}>Login</button>
            </div>
          </Route>
          <Route path="/list">
            {localStorage.getItem('isLoggedin') ? 
              (
                <List />
              ) :
              (
                <Redirect
                  to={{
                    pathname: "/login",
                  }}
                />
              )
            }
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useTranslation, I18nextProvider } from "react-i18next";
import News from '../pages/News';
import language from '../config/language';
import List from '../pages/List';

const Routes = () => {
  const { t, i18n } = useTranslation();
  // const [isLoggedin, setIsLoggedin] = useState(false);

  const loginAction = () => {
    // setIsLoggedin(true);
    localStorage.setItem('isLoggedin', true);
  }

  return (
    <I18nextProvider i18n={language}>
      <Router>
        <div>
          {/* Navigasi */}
          <ul>
            <li>
              <button onClick={() => i18n.changeLanguage(i18n.language === "en" ? "id" : "en")}>Ganti Bahasa</button>
            </li>
            <li>
              <a href="/">{t("news")}</a>
            </li>
            <li>
              <a href="/list">{t("list")}</a>
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
    </I18nextProvider>
  );
}

export default Routes;
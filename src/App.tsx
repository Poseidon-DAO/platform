import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "pages/LandingPage";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path="/components" render={(props) => <Index {...props} />} /> */}
        <Route
          // path="/landing-page"
          path="/"
          render={(props: any) => <LandingPage {...props} />}
        />
        {/* <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      /> */}
        <Redirect from="/" to="/components" />
      </Switch>
    </BrowserRouter>
  );
}

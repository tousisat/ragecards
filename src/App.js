import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import "./App.scss";

import HomePage from "./containers/HomePage/HomePage";
import BuyPage from "./containers/BuyPage/BuyPage";
import FeaturePage from "./containers/FeaturePage/FeaturePage";
import ProofOfAuthenticityPage from "./containers/ProofOfAuthenticityPage/ProofOfAuthenticityPage";
import Layout from "./hoc/Layout";

const App = props => {
  const routes = (
    <Switch>
      <Route
        path="/proof-of-authenticity"
        component={ProofOfAuthenticityPage}
      />
      <Route path="/buy" component={BuyPage} />
      <Route path="/feature" component={FeaturePage} />
      <Route path="/" exact component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
};

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'


import Layout from "./pages/layout";
import Transactions from "./pages/transactions";
import Dashboard from "./pages/dashboard";





const app = document.getElementById('app');

ReactDOM.render(
  <Router history = {browserHistory}>
      <Route path = "/" component = {Layout}>
        <IndexRoute component={Dashboard}  />
       <Route path="transactions" name="Tabel" component={Transactions}></Route>
      </Route>
   </Router>,
app);
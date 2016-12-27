
import React from "react";
import {  Link} from 'react-router'



export default class Nav extends React.Component {

  render() {

    return (
      <nav class="side-nav">
      <ul>
        <li>
          
          <Link to="/">Overview (3)</Link>
          <Link to="transactions">Transactions ({this.props.trans})</Link>
         
        </li>
        <li>
          <a href="javascript:;">Transfers (2)</a>
          <a href="javascript:;">Invoices (1)</a>
        </li>
        <li>
          <a href="javascript:;">Manage Cards</a>
          <a href="javascript:;">Manage Accounts</a>
        </li>
        <li>
          <a href="javascript:;">Team</a>
          <a href="javascript:;">Integrations</a>
          <a href="javascript:;">Settings</a>
        </li>
        <li>
          <a class="btn btn-block" href="javascript:;">Upgrade Account</a>
        </li>
      </ul>
    </nav>
    );
  }
}
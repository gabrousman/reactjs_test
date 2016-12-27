
import React from "react";
import {  Link} from 'react-router'


export default class Header extends React.Component {

	selectAll(){

	}
	
  render() {
    return (
      <header class="header">
    <Link to="/" class="logo"><img src="img/logo.png" alt="Logo" /></Link>
    <div class="my-account"></div>
    <a href="javascript:;" class="cd-nav-trigger"><span></span></a>
  </header> 
    );
  }
}
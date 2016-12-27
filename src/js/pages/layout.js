import React from "react";


import RightSidebar from "../components/layout/right_sidebar";
import Header from "../components/layout/header";
import Nav from "../components/layout/nav";
import { Link } from "react-router";
import Data from "../../dummy_data";

export default class Layout extends React.Component {

   constructor(props) {
  
    super(props);
  this.state =  {
      checkAll: false,
    };
     
  }




   checkAll(d) {
    
   this.setState({
    checkAll: d
    });
  }

  renderChildren() {
    
     var self = this;
   var children = React.Children.map(this.props.children, function(child) {
    return React.cloneElement(child, {
      Data:Data,callback:self.checkAll.bind(self),allChecked:self.state.checkAll});
});

   return children;
}

 

  render() {
    
    return (
    	<div>
    	<Header />
            <main class="main">
    <Nav trans={Data.length}/>
    <div class="content-wrapper">
      <div class="col-lg-9">
      {this.renderChildren()}
      </div>
      <div class="col-lg-3 col-md-3 col-xs-12 col-sm-12"><RightSidebar /></div>
    </div> 
  </main> 
    	</div>
       
);
  }
}
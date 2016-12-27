import React from "react";
import TabelHeader from "./tabel/header";
import TabelBody from "./tabel/body";


export default class Tabel extends React.Component {
  render() {

    return (
    	
          <div class="table-responsive">
     <table class="table custom-table">
              
             <TabelHeader callback={this.props.callback}  allChecked={this.props.allChecked}/>
             <TabelBody data={this.props.data}  allChecked={this.props.allChecked}/>
            </table>
            </div>
            
    );
  }
}

import React from "react";

import Tabel from "../components/tabel";


export default class Transactions extends React.Component {
  render() {

    return (
      
        <div class="table-wrp">
        <Tabel data={this.props.Data} callback={this.props.callback} allChecked={this.props.allChecked}/>
        </div>
      
    );
  }
}